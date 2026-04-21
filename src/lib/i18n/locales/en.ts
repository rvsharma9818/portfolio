import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: { localeName: "English", localeShort: "EN", dir: "ltr" },
  nav: {
    about: "About",
    work: "Work",
    experience: "Experience",
    contact: "Contact",
    letsTalk: "Let's talk",
    menu: "Toggle menu",
    toggleTheme: "Toggle theme",
    toggleLanguage: "Switch language",
  },
  hero: {
    openToWork: "open to work",
    aiAugmented: "AI-augmented workflow",
    tagline: {
      lead: "Team Lead at",
      company: "Nexora Technology",
      middle: ", leading a team of 5 on",
      productHighlight: "GatewayHub 2.0",
      middle2: " — our payments platform. 4+ years shipping",
      tail: ", reliable backends.",
    },
    seeWork: "See selected work",
    sayHello: "Say hello",
    scroll: "scroll",
    version: "v2026 · three.js",
  },
  aiBar: {
    label: "Daily AI stack",
    labelShort: "AI stack",
  },
  sections: {
    about: { eyebrow: "About", titleLead: "Backends that", titleAccent: "scale quietly." },
    work: { eyebrow: "Selected work", titleLead: "Systems", titleAccent: "shipped." },
    experience: { eyebrow: "Career", titleLead: "Places I've", titleAccent: "built at." },
    credentials: { eyebrow: "Credentials", titleLead: "Receipts &", titleAccent: "proof." },
    contact: { eyebrow: "Contact", titleLead: "Let's build", titleAccent: "something." },
  },
  about: {
    intro: [
      "I'm a Team Lead and backend engineer with 4+ years of experience designing and scaling systems for consumer-facing and SaaS products. My work sits at the intersection of reliability, cost, and revenue — payment gateways, subscription platforms, real-time ML inference, and the observability glue that keeps it all honest in production.",
      "Currently at Nexora Technology, leading a team of 5 on GatewayHub 2.0 — the next generation of our payments platform, covering the merchant portal, core API, and in-product chat. Before that, at Somish Blockchain Labs (Hunch), I built backend-driven subscription integrations with RevenueCat and Stripe, and replaced AWS Personalize with an Airflow retraining pipeline that saved $10K/month.",
      "I care about systems that degrade gracefully, tight feedback loops between engineering and product, and writing code that the next on-call engineer is happy to inherit. I lean heavily on AI in my day-to-day — Claude, Cursor, and Copilot for design notes, Jira ticket breakdowns, PR drafting, and first-pass code review, so the team spends its time on the problems that actually need humans.",
    ],
    currently: {
      label: "Currently",
      online: "● online",
      roleLine: "Team Lead at Nexora Technology",
      focusLine: "Leading 5 engineers on GatewayHub 2.0 (payments)",
      openLine: "Open to platform & fintech conversations",
    },
    stats: {
      label: "Stats",
      years: "Years",
      leading: "Leading",
      leadingValue: "5 eng",
    },
    workflow: {
      heading: "How I work — AI-augmented",
      cards: [
        { tool: "Claude", use: "Design notes, PRDs, system-design explorations" },
        { tool: "Cursor + Claude", use: "Jira ticket breakdowns & acceptance criteria" },
        { tool: "Cursor", use: "Implementation, PR drafts, context-aware refactors" },
        { tool: "Copilot + Claude", use: "First-pass code review & code-quality checks" },
      ],
    },
    toolkit: "Toolkit",
  },
  projects: {
    impact: "Impact",
    featured: "Featured",
    repo: "Repo",
    visit: "Visit",
  },
  experience: { present: "Present" },
  credentials: {
    education: "Education",
    certifications: "Certifications",
  },
  contact: {
    copyIntro:
      "I'm always up for ambitious ideas, hard problems, and good engineering. Email is fastest — I usually reply the same day.",
    status: {
      response: { label: "Response", value: "< 24h" },
      basedIn: { label: "Based in", value: "New Delhi, India" },
      availability: { label: "Availability", value: "Open to roles" },
      currently: { label: "Currently", value: "GatewayHub 2.0" },
    },
    excitedLabel: "What gets me excited",
    interests: [
      "Payments & fintech infra",
      "Platform/devtools teams",
      "ML + backend systems",
      "AI-augmented workflows",
      "Lead / senior roles",
    ],
    copyEmail: "Copy email",
    copied: "Copied",
    signature: "~ Ravi Kumar",
  },
  footer: {
    bio: "Team Lead & backend engineer building payments, platforms, and the observability glue that keeps production boring.",
    sitemap: "Sitemap",
    elsewhere: "Elsewhere",
    backToTop: "Back to top",
    builtWith: "Built with R3F + Framer Motion · v2026.01",
    aiStackLine: "Daily AI stack:",
  },
};
