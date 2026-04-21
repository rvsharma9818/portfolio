export const siteConfig = {
  name: "Ravi Kumar Sharma",
  role: "Team Lead · Backend Engineer",
  location: "New Delhi, India",
  email: "rvsharma2652@gmail.com",
  phone: "+91-8826647433",
  tagline:
    "Team Lead at Nexora Technology with 4+ years shipping consumer and SaaS platforms — payment orchestration, subscriptions, ML pipelines, and the observability systems that keep things boring in production. Currently leading a team of 5 on GatewayHub 2.0, a plug-and-play multi-PSP payments platform.",
  portraitUrl:
    "https://res.cloudinary.com/dyi6wxu59/image/upload/kling_20260422_%E4%BD%9C%E5%93%81_Image13d_m_179_1-removebg-preview_vce5i3.png",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
};

export const about = {
  headline: "I build backends that scale quietly.",
  body: [
    "I'm a Team Lead and backend engineer with 4+ years of experience designing and scaling systems for consumer-facing and SaaS products. My work sits at the intersection of reliability, cost, and revenue — payment gateways, subscription platforms, real-time ML inference, and the observability glue that keeps it all honest in production.",
    "Currently at Nexora Technology, leading a team of 5 on GatewayHub 2.0 — the next generation of our payments platform, covering the merchant portal, core API, and in-product chat. Before that, at Somish Blockchain Labs (Hunch), I built backend-driven subscription integrations with RevenueCat and Stripe, and replaced AWS Personalize with an Airflow retraining pipeline that saved $10K/month.",
    "I care about systems that degrade gracefully, tight feedback loops between engineering and product, and writing code that the next on-call engineer is happy to inherit. I lean heavily on AI in my day-to-day — Claude, Cursor, and Copilot for design notes, Jira ticket breakdowns, PR drafting, and first-pass code review, so the team spends its time on the problems that actually need humans.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  impact?: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    title: "GatewayHub 2.0 — Payment Orchestration Platform",
    description:
      "Leading the ground-up rebuild of Nexora's payment orchestration platform. GatewayHub integrates multiple payment gateways behind a single, pluggable API — new PSPs can be onboarded dynamically from the admin UI, without a code release. Scope covers the merchant portal (GatewayHub FE), the core gateway API, the Merchant service, and an in-product Chat module for merchant support. Lead a team of 5 across backend and frontend.",
    tags: [
      "Team Lead",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "SigNoz",
      "OpenTelemetry",
    ],
    impact: [
      "Multi-gateway aggregation — a single API routes traffic across multiple PSPs",
      "Dynamic onboarding: new payment providers configured from UI, no redeploy",
      "Observability end-to-end via SigNoz + OpenTelemetry — traces, metrics, logs in one place",
      "Leading 5-engineer team across backend, frontend, and infra",
    ],
    featured: true,
    year: "2025 — Present",
  },
  {
    title: "Subscription Platform — RevenueCat + Stripe",
    description:
      "Architected a backend-driven subscription system with a dynamic pricing engine, personalized offer delivery, and automated free-trial management for Hunch's consumer app (10k+ DAU).",
    tags: ["Node.js", "AWS Lambda", "RevenueCat", "Stripe", "PostgreSQL"],
    impact: [
      "40% revenue growth",
      "35% lift in renewals",
      "Weekly entitlement logic for automated feature access",
    ],
    featured: true,
    year: "2024 — 2025",
  },
  {
    title: "ML Retraining Pipeline — Airflow + SageMaker",
    description:
      "Replaced AWS Personalize with an in-house Airflow-orchestrated retraining pipeline and automated the ReCSY training workflow on SageMaker, serving real-time inference through GraphQL/REST APIs.",
    tags: ["Airflow", "SageMaker", "Python", "GraphQL", "Kinesis"],
    impact: [
      "$10K/month saved vs. AWS Personalize",
      "60% reduction in model training latency",
      "30% system throughput improvement",
    ],
    featured: true,
    year: "2024",
  },
  {
    title: "Observability Stack",
    description:
      "Rolled out a centralized observability layer across CloudWatch, ELK, Grafana, and New Relic with standardized dashboards and alert routing, so on-call stops guessing.",
    tags: ["ELK", "Grafana", "New Relic", "CloudWatch", "Sentry"],
    impact: [
      "Incident response cut from 2h → 20min",
      "Unified metrics, logs, and traces across services",
    ],
    year: "2024",
  },
  {
    title: "SkyeOps & SkyeFMS — Drone Management Backend",
    description:
      "Built REST and WebSocket APIs powering real-time telemetry, fleet state, and mission control for drone management platforms at Antino Labs.",
    tags: ["Node.js", "WebSockets", "PostgreSQL", "Redis", "Stripe"],
    impact: [
      "25% improvement in payment transaction reliability",
      "60% lower latency via Redis caching + query tuning",
      "30% faster deploys with Docker + GitHub Actions",
    ],
    year: "2022 — 2023",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "Node.js", "GoLang", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Express.js", "NestJS", "GraphQL", "REST"],
  },
  {
    category: "Cloud & Infra",
    items: [
      "AWS (Lambda, EC2, RDS, S3, IAM)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    category: "Data & ML",
    items: ["PostgreSQL", "Redis", "Elasticsearch", "Airflow", "SageMaker", "Kafka", "Kinesis", "OpenAI APIs"],
  },
  {
    category: "Observability",
    items: [
      "SigNoz",
      "OpenTelemetry",
      "ELK Stack",
      "Grafana",
      "New Relic",
      "Sentry",
      "CloudWatch",
    ],
  },
  {
    category: "AI & Tooling",
    items: [
      "Claude",
      "Cursor",
      "GitHub Copilot",
      "OpenAI APIs",
      "MCP",
    ],
  },
  {
    category: "Analytics",
    items: ["Mixpanel", "MoEngage", "CleverTap"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Team Lead",
    company: "Nexora Technology Pvt. Ltd.",
    location: "New Delhi, India",
    period: "Oct 2025 — Present",
    description:
      "Leading a team of 5 engineers building GatewayHub 2.0 — a payment orchestration platform that aggregates multiple payment gateways behind a single pluggable API, with UI-driven onboarding and end-to-end observability.",
    highlights: [
      "Lead a 5-engineer team across backend, frontend, and platform; drive architecture, code review, and delivery.",
      "Architected GatewayHub API as a dynamic, plugin-based integration layer — any payment gateway can be added from the admin UI without a code release.",
      "Integrated multiple PSPs behind a unified transaction, webhook, and settlement interface so merchants consume one API.",
      "Rolled out SigNoz + OpenTelemetry across services — distributed traces, metrics, and logs unified in a single pane for on-call.",
      "Leading the GatewayHub 2.0 frontend rebuild in Next.js — redesigned merchant dashboard, onboarding, and reporting.",
      "Architected the Merchant service (KYC, onboarding, lifecycle) and the in-app Chat module for merchant support.",
      "AI-augmented team workflow: Claude for design & PRDs, Cursor for implementation, Copilot for inline completion — automated Jira ticket breakdowns, PR creation, and first-pass code review for the team.",
      "Established review, deployment, and on-call practices for the team from day one.",
    ],
  },
  {
    role: "Software Development Engineer II",
    company: "Somish Blockchain Labs (Hunch)",
    location: "New Delhi, India",
    period: "Dec 2023 — Oct 2025",
    description:
      "Led backend initiatives across subscriptions, ML inference, and observability for a consumer app with 10k+ DAU.",
    highlights: [
      "Architected serverless microservices on AWS Lambda, EC2, and RDS supporting 10k+ daily active users.",
      "Shipped RevenueCat + Stripe subscription integration with dynamic pricing, personalized offers, and free-trial automation — drove 40% revenue growth and 35% improvement in renewals.",
      "Replaced AWS Personalize with Airflow-based retraining pipelines, saving $10K/month in compute.",
      "Automated ReCSY training via SageMaker, reducing model training latency by 60%.",
      "Centralized observability across CloudWatch, ELK, Grafana, and New Relic — incident response 2h → 20min.",
      "Implemented OAuth2/JWT with AWS Secrets Manager for secure credential rotation and compliance.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Antino Labs Pvt. Ltd.",
    location: "Gurugram, India",
    period: "Aug 2022 — Nov 2023",
    description:
      "Backend engineer on the SkyeOps and SkyeFMS drone management platforms.",
    highlights: [
      "Built REST + WebSocket APIs for real-time drone telemetry and fleet control.",
      "Integrated Stripe payments with optimized payload handling — 25% improvement in transaction reliability.",
      "Rolled out Redis caching and query optimization, cutting latency by 60%.",
      "Automated CI/CD with Docker and GitHub Actions, reducing deploy time by 30%.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Freelance / Open Source",
    location: "Remote",
    period: "Jul 2020 — Jul 2022",
    description:
      "Built backend services for SaaS clients and contributed to open-source projects.",
    highlights: [
      "Developed microservices in Python (FastAPI) and Node.js with multi-tenant architectures.",
      "Integrated PostgreSQL, Redis, and Elasticsearch, handling millions of records.",
      "Containerized and deployed services on AWS ECS with automated monitoring and logging.",
    ],
  },
];

export const education = {
  degree: "B.Tech",
  school: "Guru Gobind Singh Indraprastha University",
  location: "New Delhi, India",
  period: "2018 — 2022",
};

export const certifications: string[] = [
  "AWS Certified Developer – Associate",
  "Google Cloud Professional Architect",
  "Docker Certified Associate",
];
