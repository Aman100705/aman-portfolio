"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "What's Aman's strongest stack?",
  "Tell me about his best project",
  "Is he open to internships?",
  "Why should I hire him?",
];

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hey — I'm AskAman. I know everything on his resume and projects. Ask me anything.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok) {
        const errText = await res.text();
        setMessages([
          ...next,
          { role: "assistant", content: errText || "Something went wrong." },
        ]);
        return;
      }

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      setMessages([...next, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Connection hiccup. Try again in a sec.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const showSuggestions = messages.length === 1;

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-ink-950 shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(251,191,36,0.5)]"
        aria-label={open ? "Close chat" : "Open AI chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-400 opacity-40 animate-ping" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[560px] w-[calc(100vw-3rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-ink-800 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/10 ring-1 ring-amber-400/30">
                <Sparkles size={16} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl leading-none text-ink-50">
                  AskAman
                </h3>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-ink-500">
                  trained on his resume
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                <span className="text-[10px] uppercase tracking-wider text-ink-500">
                  online
                </span>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                      m.role === "user"
                        ? "bg-amber-400 text-ink-950"
                        : "bg-ink-800 text-ink-100"
                    }`}
                  >
                    {m.content || (
                      <span className="inline-flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400" />
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-ink-500">
                    Try asking
                  </p>
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="block w-full rounded-lg border border-ink-800 bg-ink-900 px-3 py-2.5 text-left text-xs text-ink-200 transition-all hover:border-amber-400/40 hover:bg-ink-800 hover:text-amber-400"
                    >
                      → {q}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-ink-800 p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Aman…"
                maxLength={1000}
                disabled={loading}
                className="flex-1 rounded-lg bg-ink-800 px-3 py-2.5 text-[13px] text-ink-50 placeholder-ink-500 outline-none ring-1 ring-transparent transition focus:ring-amber-400/40 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-ink-950 transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={15} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
