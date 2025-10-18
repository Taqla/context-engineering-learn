# Context Engineering Learning Platform

A comprehensive Next.js 15 PWA learning platform for mastering context engineering from fundamentals to meta-recursion.

## 🚀 Features

- **6 Progressive Learning Modules**: From prompt fundamentals to meta-recursion
- **AI-Powered Quizzes**: Dynamic quiz generation using Gemini 2.0 Flash
- **Offline-First**: IndexedDB persistence for quiz state and progress tracking
- **Dual Navigation**: Learning path + repository structure reference sidebar
- **PWA Support**: Full Progressive Web App with ServiceWorker caching
- **LobeHub-Inspired UI**: Clean, modern interface built with Ant Design 5

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **UI Library**: Ant Design 5.x
- **Styling**: CSS Modules + Ant Design theming
- **Content**: MDX with @next/mdx
- **State Management**: IndexedDB via Dexie.js
- **PWA**: @ducanh2912/next-pwa
- **AI**: Google Gemini 2.0 Flash API
- **Deployment**: Vercel (auto-deploy from GitHub)

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
echo "GEMINI_API_KEY=your_api_key_here" > .env.local

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
context-engineering-learn/
├── app/
│   ├── layout.tsx              # Root layout with PWA manifest
│   ├── page.tsx                # Landing page (redirects to module-1)
│   ├── (docs)/                 # Docs layout group
│   │   ├── layout.tsx          # Sidebar + content layout
│   │   ├── module-[1-6]/       # Module pages
│   │   └── repo/               # Repository reference pages
│   └── api/
│       └── quiz/
│           ├── generate/       # Gemini API quiz generation
│           └── evaluate/       # Answer validation
├── components/
│   ├── DocsSidebar.tsx         # Dual-nav sidebar
│   ├── QuizEmbed.tsx           # Quiz UI with difficulty tabs
│   ├── ProgressTracker.tsx     # Module completion display
│   └── MDXComponents.tsx       # Custom MDX components
├── lib/
│   ├── quiz-db.ts              # Dexie.js IndexedDB wrapper
│   ├── gemini-client.ts        # Gemini API client
│   └── module-metadata.ts      # Module manifest + progress calc
├── styles/
│   ├── lobehub-theme.ts        # Ant Design token overrides
│   └── globals.css             # Typography + quiz styling
├── content/
│   ├── modules/                # MDX module content
│   ├── repo-reference/         # Repository reference docs
│   └── manifest.json           # Module metadata
└── public/
    ├── manifest.json           # PWA manifest
    └── icons/                  # PWA icons
```

## 🎓 Learning Modules

1. **Module 1: Prompt Fundamentals** (30 min) - Atomic prompting, constraints, examples
2. **Module 2: Context Expansion** (45 min) - Few-shot learning, memory, templates
3. **Module 3: Multi-Agent Systems** (60 min) - Agent architecture, orchestration
4. **Module 4: Cognitive Tools** (60 min) - Neural systems, IBM research, tool calls
5. **Module 5: Field Theory** (90 min) - Neural fields, symbolic emergence, MEM1
6. **Module 6: Meta-Recursion** (90 min) - Self-improvement, quantum semantics

## 🔑 Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your Gemini API key from: https://makersuite.google.com/app/apikey

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Add `GEMINI_API_KEY` environment variable
4. Deploy!

### Manual Build

```bash
npm run build
# Outputs to /out directory for static hosting
```

## 📝 Development Roadmap

- [x] Project setup and configuration
- [x] Core components and layouts
- [x] IndexedDB integration
- [x] Gemini API integration
- [x] PWA configuration
- [ ] Module content (MDX files)
- [ ] Quiz generation scripts
- [ ] Repo reference pages
- [ ] Enhanced icon assets

## 🤝 Contributing

This is a learning platform based on the [Context-Engineering](https://github.com/davidkimai/Context-Engineering) repository. Contributions are welcome!

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Based on concepts from [davidkimai/Context-Engineering](https://github.com/davidkimai/Context-Engineering)
- UI inspired by [LobeHub](https://github.com/lobehub)
- Powered by [Gemini 2.0 Flash](https://deepmind.google/technologies/gemini/)
