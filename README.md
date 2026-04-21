# AskAman — AI-Powered Portfolio 🤖

> A modern developer portfolio with a floating AI chat widget that answers recruiters' questions in real time, powered by Google Gemini.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Google Gemini API

---

## ✨ What makes this different

- 💬 **Floating AI chat** trained on your resume — answers recruiters 24/7
- ⚡ **Streaming responses** — words appear as the model generates them
- 🎨 **Editorial-brutalist design** — serif display typography, warm amber accent, not another purple gradient portfolio
- 🔒 **Rate limiting baked in** — protects your free API tier from abuse
- 📱 **Fully responsive** — looks sharp on phone, tablet, and desktop
- 🚀 **Deploys to Vercel in one click**

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Get a free Gemini API key

1. Go to https://aistudio.google.com/app/apikey
2. Create a new key
3. Copy it

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and paste your key:

```
GEMINI_API_KEY=your_actual_key_here
```

### 4. Run it

```bash
npm run dev
```

Open http://localhost:3000 — try the chat widget in the corner!

---

## 🎨 Customization Guide

### Make it yours (in order of importance)

#### 1. Update your story — `lib/knowledge-base.ts`
This is the **most important file** in the project. It's what the AI knows about you. Open it and replace every section with your own details — education, skills, projects, hackathons, everything.

> 💡 The more detailed and specific you make this, the smarter the bot feels.

#### 2. Tune the AI's personality — `lib/system-prompt.ts`
Controls the bot's tone, guardrails, and example responses. Tweak:
- The `TONE EXAMPLES` section to match how you actually talk
- The `HARD RULES` if you want different guardrails
- The welcome message in `components/chat/ChatWidget.tsx`

#### 3. Update the sections
| File | What to change |
|---|---|
| `components/sections/Hero.tsx` | Your name, tagline, status chip |
| `components/sections/About.tsx` | Bio, pull quote, quick facts |
| `components/sections/Projects.tsx` | The `PROJECTS` array — your actual projects |
| `components/sections/Skills.tsx` | The `MARQUEE` and `CATEGORIES` arrays |
| `components/sections/Contact.tsx` | The `SOCIALS` array — your actual links |
| `app/layout.tsx` | Page title, meta description, OG tags |

#### 4. Add your resume
Drop your resume PDF at `public/resume.pdf` so the download button works.

#### 5. Tweak the vibe (optional)
- **Accent color:** Change `amber-400` across files for a different feel (try `emerald-400`, `rose-400`, `violet-400`)
- **Typography:** Swap `Instrument_Serif` in `app/layout.tsx` for any Google Font — try `Fraunces`, `PP Editorial`, or `Bricolage Grotesque`
- **Background:** Edit `app/globals.css` to adjust the noise texture or change the base color

---

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│  Recruiter's browser                │
│  Portfolio UI + floating ChatWidget │
└─────────────┬───────────────────────┘
              │ POST /api/chat
              │ { messages: [...] }
              ▼
┌─────────────────────────────────────┐
│  Next.js API route (/api/chat)      │
│   1. IP-based rate limit            │
│   2. Validate payload               │
│   3. Inject system prompt + KB      │
│   4. Stream response back           │
└─────────────┬───────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  Google Gemini API (1.5 Flash)      │
└─────────────────────────────────────┘
```

---

## 📁 Project Structure

```
ai-portfolio/
├── app/
│   ├── api/chat/route.ts      # The streaming AI endpoint
│   ├── layout.tsx             # Fonts + global metadata
│   ├── page.tsx               # Main page
│   └── globals.css            # Global styles + noise texture
├── components/
│   ├── chat/
│   │   └── ChatWidget.tsx     # Floating chat (streaming, animated)
│   ├── sections/
│   │   ├── Hero.tsx           # Big serif name, CTAs
│   │   ├── About.tsx          # Editorial bio + quick facts
│   │   ├── Projects.tsx       # Numbered project list
│   │   ├── Skills.tsx         # Marquee + categorized stack
│   │   └── Contact.tsx        # Huge CTA + socials
│   └── Navbar.tsx             # Sticky top nav
├── lib/
│   ├── knowledge-base.ts      # ⭐ YOUR resume as text (the brain)
│   ├── system-prompt.ts       # ⭐ AI personality + guardrails
│   └── utils.ts               # className merger
├── public/
│   └── resume.pdf             # (add your resume here)
├── .env.example               # Template for env vars
├── package.json
├── tailwind.config.ts         # Custom colors, fonts, animations
├── tsconfig.json
└── next.config.ts
```

---

## 🚢 Deploy to Vercel (production)

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your repo
4. Add environment variable: `GEMINI_API_KEY`
5. Click Deploy

You'll get a `.vercel.app` URL instantly. Add a custom domain in the Vercel settings if you own one.

### ⚠️ Before going public

- ✅ Rate limiting is already enabled (15 req/min per IP) — for serious production traffic, swap to [Upstash Redis](https://upstash.com/)
- ✅ Monitor your Gemini usage at https://aistudio.google.com/
- ✅ Add Vercel Analytics to see what recruiters ask most

---

## 🎯 Roadmap Ideas

- [ ] Save conversations to localStorage for returning visitors
- [ ] Admin dashboard showing most-asked questions
- [ ] Email capture inside chat ("Want to chat live? Drop your email")
- [ ] Voice input via Web Speech API
- [ ] Export chat transcript as PDF
- [ ] Multi-language (Hindi + English)
- [ ] Swap in-memory rate limiter for Upstash Redis
- [ ] Add RAG with Pinecone once knowledge base grows past 10k tokens

---

## 🧠 Why this project is a career move

If you're a student shipping this as a portfolio:

1. **It showcases AI integration** — recruiters see you've built with LLMs, not just read about them
2. **It shows system design** — streaming, rate limiting, prompt engineering, API routing
3. **It's a conversation starter** — recruiters will bring it up in interviews
4. **It's meta** — your portfolio IS an LLM-powered product. You're demoing the skill by using it.
5. **It scales your outreach** — while you sleep, it's answering questions about you

---

## 📬 Built by

**Aman Patel** · [Email](mailto:ap3668@srmist.edu.in) · [LinkedIn](https://linkedin.com/in/YOUR_LINKEDIN) · [GitHub](https://github.com/YOUR_USERNAME)

---

## 📄 License

MIT — fork it, make it yours, ship it.
