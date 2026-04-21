import { GoogleGenerativeAI } from "@google/generative-ai";
import { systemPrompt } from "@/lib/system-prompt";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string, limit = 15, windowMs = 60_000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= limit) return false;
  record.count++;
  return true;
}

const MODELS_TO_TRY = [
  "gemini-2.5-flash-lite",
  "gemini-flash-lite-latest",
  "gemini-flash-latest",
  "gemini-2.5-flash",
];

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return new Response("Whoa, slow down. Try again in a minute.", { status: 429 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return new Response("Server missing API key.", { status: 500 });
    }

    const body = await req.json();
    const messages: ChatMessage[] = body?.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response("Invalid payload", { status: 400 });
    }

    const firstUserIdx = messages.findIndex((m) => m.role === "user");
    if (firstUserIdx === -1) {
      return new Response("No user message found", { status: 400 });
    }
    const normalized = messages.slice(firstUserIdx);

    const lastMessage = normalized[normalized.length - 1];
    if (lastMessage.role !== "user") {
      return new Response("Last message must be from user", { status: 400 });
    }

    const lastUserMessage = lastMessage.content;
    if (typeof lastUserMessage !== "string" || lastUserMessage.length === 0 || lastUserMessage.length > 1000) {
      return new Response("Please keep messages under 1000 characters.", { status: 400 });
    }

    const history = normalized.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const genAI = new GoogleGenerativeAI(apiKey);
    let lastError: unknown = null;
    let lastStatus = 500;

    for (const modelName of MODELS_TO_TRY) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt,
        });

        const chat = model.startChat({
          history,
          generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
        });

        const result = await chat.sendMessageStream(lastUserMessage);
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of result.stream) {
                const text = chunk.text();
                if (text) controller.enqueue(encoder.encode(text));
              }
            } catch (err) {
              console.error("Stream error:", err);
            } finally {
              controller.close();
            }
          },
        });

        console.log(`✓ Using model: ${modelName}`);
        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
          },
        });
      } catch (err: unknown) {
        console.error(`Model ${modelName} failed:`, err);
        lastError = err;
        if (err && typeof err === "object" && "status" in err) {
          lastStatus = (err as { status: number }).status;
        }
        continue;
      }
    }

    const errMsg = lastError instanceof Error ? lastError.message : String(lastError);
    if (lastStatus === 429 || errMsg.includes("429") || errMsg.includes("quota")) {
      return new Response(
        "AI is taking a quick break (daily quota hit). Try again later, or email ap3668@srmist.edu.in directly.",
        { status: 429 }
      );
    }
    return new Response(`All models failed. Details: ${errMsg}`, { status: 500 });
  } catch (err) {
    console.error("Chat API error:", err);
    const errMsg = err instanceof Error ? err.message : String(err);
    return new Response(`Error: ${errMsg}`, { status: 500 });
  }
}
