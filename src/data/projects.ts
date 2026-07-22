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
      "Alpha Strike backtests a cointegrated pairs-trading strategy across the S&P 500: sector-grouped candidate pairs are filtered by correlation and Engle-Granger cointegration, then evaluated on a 24-variant parameter grid (z-score lookbacks, entry/exit thresholds) with a 2-year rolling train / 6-month test walk-forward backtest, 5bps transaction costs, and vol-targeted position sizing. Of 5,112 strategy variants tested from 2020 to 2026, 1,051 (20.6%) look profitable on a naive Sharpe ratio, but zero survive a Deflated Sharpe Ratio correction above the 0.95 significance bar — the actual point of the project: a backtest that tries enough parameter combinations will always produce something that looks like edge. The single best naive Sharpe in the universe (4.38, on utility pair AEE/LNT) carries only a 41% probability of reflecting real skill once the Deflated Sharpe Ratio accounts for it being the best of 5,112 attempts rather than the only one, even though a permutation test on that pair in isolation rejects the noise null on its own terms (p < 0.002), illustrating how selection bias and single-test significance answer different questions. Results ship with explicit caveats for survivorship bias, non-point-in-time sector classification, and data-vendor methodology differences. Backed by 28 unit tests, mypy and ruff clean, with the full pipeline reproducible in about 2 minutes on a warm cache.",
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
      "A news topic classifier with a promotion gate that only ships retrained models that measurably beat the incumbent, live drift detection, and a fully Terraformed AWS serverless deployment.",
    description:
      "newsclf is a news topic classifier (TF-IDF + Logistic Regression over business, technology, sports, politics, health, entertainment, and science) served through FastAPI on a containerized AWS Lambda, with an hourly GitHub Actions workflow ingesting fresh articles from 22 RSS feeds and a weekly workflow retraining and gating the model. Every retrain trains a candidate and scores it against the currently deployed incumbent on the same fresh, never-seen holdout, only promoting it if it beats the incumbent by a configurable margin — the first real retrain scored a candidate at 0.516 macro F1 against the incumbent's 0.576, and the gate correctly rejected it, keeping the better model live. The deployed model serves at a 5.6ms warm p50 latency (benchmarked against a real uvicorn process, 200 requests) and reports live drift signals — out-of-vocabulary rate, population stability index, and rolling accuracy on genuinely unseen articles — so retraining is driven by measured language drift, not just a fixed schedule. All AWS access in CI runs through GitHub Actions OIDC role assumption with no long-lived credentials in repo secrets, and Terraform provisions the full stack (S3, ECR, Lambda, IAM, CloudWatch, and an ephemeral EC2 training instance that self-terminates after every run). One real bug caught along the way: the 'saga' solver is stochastic, and without a fixed random seed identical data produced different holdout accuracy on different runs (0.53 vs. 0.75) until it was pinned and verified deterministic. Backed by 39 tests, ruff and mypy clean — the Terraform is validated but not yet applied against live infrastructure, and the Lambda container image is written to spec but unbuilt, both flagged honestly rather than glossed over.",
    tech: ["Python", "scikit-learn", "FastAPI", "Mangum", "AWS Lambda", "AWS S3", "AWS EC2", "Terraform", "GitHub Actions"],
    github: "https://github.com/yasirh567-stack/Real-Time-News-Classifier",
    coverImage: {
      src: "/projects/real-time-news-classifier/cover.png",
      alt: "newsclf results dashboard showing test accuracy, per-class F1 scores, serving latency, and the promotion gate rejecting a worse retrained candidate",
    },
    images: [
      {
        src: "/projects/real-time-news-classifier/cover.png",
        alt: "newsclf results dashboard showing test accuracy, per-class F1 scores, serving latency, and the promotion gate rejecting a worse retrained candidate",
      },
      {
        src: "/projects/real-time-news-classifier/screenshot-1.png",
        alt: "newsclf architecture diagram: RSS feeds and AG News flow through hourly ingest into an S3 data lake, a weekly ephemeral EC2 job trains and gates a candidate model, and the promoted model serves from a Lambda container image",
      },
    ],
  },
];
