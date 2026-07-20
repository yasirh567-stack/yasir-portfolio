import type { Project } from "./types";

/**
 * Projects grid + detail pages. To add a new project:
 *   1. Add a new object to this array with a unique `slug`.
 *   2. Drop images in public/projects/<slug>/ (see README for sizes).
 *   3. Omit `liveDemo` entirely if you don't have one yet — the card and
 *      detail page automatically show only the "View Code" button.
 * That's it — /projects and /projects/<slug> pick it up automatically.
 */
export const projects: Project[] = [
  {
    slug: "marketpulse",
    name: "MarketPulse AI",
    featured: true,
    summary:
      "Real-time stock sentiment and market intelligence platform with explainable predictions and honest backtesting — runs entirely in a free demo mode, no API keys required.",
    description:
      "MarketPulse AI combines market data, financial news, NLP sentiment (VADER, with an optional FinBERT comparison), explainable machine learning, and rigorous backtesting into one transparent research dashboard — runnable entirely for free in a full demo mode that needs zero API keys. A walk-forward-validated model estimates next-day direction with permutation-importance explanations instead of a black box, and backtests are run against buy-and-hold with transaction costs, drawdown, and hypothetical-results warnings clearly surfaced. An evidence-based assistant answers 'why is this stock moving?' with a deterministic, cited response built from retrieved headlines — no generative hallucination — and a dedicated Status page shows exactly which data sources and models are active. The backend is covered by 96 tests at 89% coverage, plus Vitest and Playwright suites. One highlight: diagnosing and fixing a probability calibration bug where the model reported 97% confidence on near-coin-flip accuracy, then adding a regression test to prevent it recurring.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "scikit-learn", "Docker"],
    github: "https://github.com/yasirh567-stack/MarketPulse",
    // TODO: add your deployed demo URL once it's live, e.g. "https://marketpulse.vercel.app"
    coverImage: {
      src: "/projects/marketpulse/cover.png",
      alt: "MarketPulse AI landing page describing its real-time sentiment and market intelligence features",
    },
    images: [
      {
        src: "/projects/marketpulse/cover.png",
        alt: "MarketPulse AI landing page describing its real-time sentiment and market intelligence features",
      },
      {
        src: "/projects/marketpulse/screenshot-1.png",
        alt: "MarketPulse AI dashboard showing an AAPL price chart with sentiment data",
      },
      {
        src: "/projects/marketpulse/screenshot-2.png",
        alt: "MarketPulse AI backtesting view with strategy configuration and performance metrics",
      },
      {
        src: "/projects/marketpulse/screenshot-3.png",
        alt: "MarketPulse AI research view comparing model accuracy against baselines with a confusion matrix",
      },
    ],
  },
  {
    slug: "marginalia",
    name: "Marginalia",
    summary:
      "A personal Retrieval-Augmented-Generation assistant that answers questions from your own notes with grounded citations.",
    description:
      "Marginalia answers natural-language questions over personal notes and PDFs, streaming responses over SSE with citations grounded in the source documents. It supports pluggable LLM backends (Anthropic, Ollama) and uses incremental indexing built on a SQLite manifest — mtime/size checks with a SHA-256 fallback, plus a debounced folder watcher — so unchanged files are never re-embedded. A precision@k / recall@k retrieval evaluation harness keeps retrieval quality measurable as the chunking and indexing logic evolves.",
    tech: ["Python", "FastAPI", "ChromaDB", "sentence-transformers", "SQLite"],
    github: "https://github.com/yasirh567-stack/Marginalia",
    coverImage: {
      src: "/projects/marginalia/cover.png",
      alt: "Marginalia landing page for asking questions about your notes and documents",
    },
    images: [
      {
        src: "/projects/marginalia/cover.png",
        alt: "Marginalia landing page for asking questions about your notes and documents",
      },
      {
        src: "/projects/marginalia/screenshot-1.png",
        alt: "Marginalia answering a question with numbered inline citations grounded in indexed notes",
      },
    ],
  },
  {
    slug: "real-time-news-classifier",
    name: "Real-Time News Classifier",
    summary:
      "TF-IDF + Logistic Regression news classifier deployed on AWS with automated retraining.",
    description:
      "A topic classification pipeline (TF-IDF + Logistic Regression) for news articles, served through FastAPI and deployed on AWS — S3 for storage, Lambda for inference, and EC2 for training — with a GitHub Actions workflow that automatically retrains and redeploys the model on a schedule, keeping classifications current as language and topics drift.",
    tech: ["Python", "scikit-learn", "FastAPI", "AWS Lambda", "AWS S3", "AWS EC2", "GitHub Actions"],
    // TODO: verify this is the exact repo URL/casing before publishing.
    github: "https://github.com/yasirh567-stack/real-time-news-classifier",
    coverImage: {
      src: "/projects/real-time-news-classifier/cover.svg",
      alt: "Real-Time News Classifier live prediction feed",
    },
    images: [
      {
        src: "/projects/real-time-news-classifier/cover.svg",
        alt: "Real-Time News Classifier live prediction feed",
      },
      {
        src: "/projects/real-time-news-classifier/screenshot-1.svg",
        alt: "Real-Time News Classifier retraining pipeline diagram",
      },
    ],
  },
];
