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
    slug: "alpha-strike",
    name: "Alpha Strike",
    featured: true,
    summary:
      "A walk-forward statistical arbitrage backtest over 5,112 strategy variants on the S&P 500, using a Deflated Sharpe Ratio to separate genuine signal from the noise of testing thousands of parameter combinations.",
    description:
      "Alpha Strike backtests a cointegrated pairs-trading strategy across the S&P 500: sector-grouped candidate pairs are filtered by correlation and Engle-Granger cointegration, then evaluated on a 24-variant parameter grid (z-score lookbacks, entry/exit thresholds) with a 2-year rolling train / 6-month test walk-forward backtest, 5bps transaction costs, and vol-targeted position sizing. Of 5,112 strategy variants tested from 2020 to 2026, 1,051 (20.6%) look profitable on a naive Sharpe ratio, but zero survive a Deflated Sharpe Ratio correction above the 0.95 significance bar — the actual point of the project: a backtest that tries enough parameter combinations will always produce something that looks like edge. The single best naive Sharpe in the universe (4.38, on utility pair AEE/LNT) carries only a 41% probability of reflecting real skill once the Deflated Sharpe Ratio accounts for it being the best of 5,112 attempts rather than the only one, even though a permutation test on that pair in isolation rejects the noise null on its own terms (p < 0.002), illustrating how selection bias and single-test significance answer different questions. Results ship with explicit caveats for survivorship bias, non-point-in-time sector classification, and data-vendor methodology differences. Backed by 38 unit tests, mypy and ruff clean, with the full pipeline reproducible in about 2 minutes on a warm cache.",
    tech: ["Python", "pandas", "NumPy", "statsmodels", "yfinance", "Matplotlib", "Pytest"],
    github: "https://github.com/yasirh567-stack/Alpha-Strike",
    coverImage: {
      src: "/projects/alpha-strike/cover.png",
      alt: "Alpha Strike statistical arbitrage report showing 5,112 strategy variants backtested with 0 surviving Deflated Sharpe Ratio correction",
    },
    images: [
      {
        src: "/projects/alpha-strike/cover.png",
        alt: "Alpha Strike statistical arbitrage report showing 5,112 strategy variants backtested with 0 surviving Deflated Sharpe Ratio correction",
      },
      {
        src: "/projects/alpha-strike/screenshot-1.png",
        alt: "Equity curves for the top 8 pair-trading variants ranked by Deflated Sharpe Ratio",
      },
      {
        src: "/projects/alpha-strike/screenshot-2.png",
        alt: "Histograms comparing naive Sharpe ratios against a permutation-test noise distribution, and Deflated Sharpe Ratios across all variants",
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
