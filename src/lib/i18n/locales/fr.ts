import type { Dictionary } from "../types";

export const fr: Dictionary = {
  meta: { localeName: "Français", localeShort: "FR", dir: "ltr" },
  nav: {
    about: "À propos",
    work: "Projets",
    experience: "Expérience",
    contact: "Contact",
    letsTalk: "Discutons",
    menu: "Menu",
    toggleTheme: "Changer de thème",
    toggleLanguage: "Changer de langue",
  },
  hero: {
    openToWork: "ouvert aux opportunités",
    aiAugmented: "flux augmenté par l'IA",
    tagline: {
      lead: "Team Lead chez",
      company: "Nexora Technology",
      middle: ", je dirige une équipe de 5 sur",
      productHighlight: "GatewayHub 2.0",
      middle2: " — notre plateforme de paiement. Plus de 4 ans à livrer",
      tail: " des backends fiables.",
    },
    seeWork: "Voir mes projets",
    sayHello: "Dis bonjour",
    scroll: "défiler",
    version: "v2026 · three.js",
  },
  aiBar: {
    label: "Stack IA quotidien",
    labelShort: "Stack IA",
  },
  sections: {
    about: { eyebrow: "À propos", titleLead: "Des backends qui", titleAccent: "scalent en silence." },
    work: { eyebrow: "Projets sélectionnés", titleLead: "Systèmes", titleAccent: "livrés." },
    experience: { eyebrow: "Carrière", titleLead: "Les lieux où j'ai", titleAccent: "construit." },
    credentials: { eyebrow: "Références", titleLead: "Reçus et", titleAccent: "preuves." },
    contact: { eyebrow: "Contact", titleLead: "Construisons", titleAccent: "quelque chose." },
  },
  about: {
    intro: [
      "Je suis Team Lead et ingénieur backend avec plus de 4 ans d'expérience à concevoir et faire passer à l'échelle des systèmes pour des produits grand public et des plateformes SaaS. Mon travail se trouve à l'intersection de la fiabilité, du coût et du revenu — passerelles de paiement, plateformes d'abonnement, inférence ML en temps réel et cette couche d'observabilité qui garde la prod honnête.",
      "Actuellement chez Nexora Technology, je dirige une équipe de 5 sur GatewayHub 2.0 — la nouvelle génération de notre plateforme de paiement, couvrant le portail marchand, l'API principale et le chat intégré. Auparavant, chez Somish Blockchain Labs (Hunch), j'ai construit des intégrations d'abonnement RevenueCat + Stripe, et remplacé AWS Personalize par un pipeline de réentraînement Airflow qui économise 10 000 $ par mois.",
      "Je tiens aux systèmes qui se dégradent gracieusement, aux boucles de feedback courtes entre ingénierie et produit, et à un code que le prochain on-call hérite avec plaisir. Je m'appuie beaucoup sur l'IA au quotidien — Claude, Cursor et Copilot pour les notes de conception, le découpage de tickets Jira, la rédaction des PR et la revue de code initiale, pour que l'équipe consacre son temps aux problèmes qui ont vraiment besoin d'humains.",
    ],
    currently: {
      label: "En ce moment",
      online: "● en ligne",
      roleLine: "Team Lead chez Nexora Technology",
      focusLine: "Je dirige 5 ingénieurs sur GatewayHub 2.0 (paiements)",
      openLine: "Ouvert aux discussions plateforme & fintech",
    },
    stats: {
      label: "Chiffres",
      years: "Années",
      leading: "Je dirige",
      leadingValue: "5 ing.",
    },
    workflow: {
      heading: "Comment je travaille — augmenté par l'IA",
      cards: [
        { tool: "Claude", use: "Notes de conception, PRDs, exploration d'architecture" },
        { tool: "Cursor + Claude", use: "Découpage de tickets Jira et critères d'acceptation" },
        { tool: "Cursor", use: "Implémentation, brouillons de PR, refactors contextuels" },
        { tool: "Copilot + Claude", use: "Revue de code initiale & contrôles qualité" },
      ],
    },
    toolkit: "Outils",
  },
  projects: {
    impact: "Impact",
    featured: "Mis en avant",
    repo: "Dépôt",
    visit: "Visiter",
  },
  experience: { present: "En cours" },
  credentials: {
    education: "Formation",
    certifications: "Certifications",
  },
  contact: {
    copyIntro:
      "Toujours partant pour des idées ambitieuses, des problèmes difficiles et de la bonne ingénierie. L'e-mail est le plus rapide — je réponds généralement le jour même.",
    status: {
      response: { label: "Réponse", value: "< 24 h" },
      basedIn: { label: "Basé à", value: "New Delhi, Inde" },
      availability: { label: "Disponibilité", value: "Ouvert aux postes" },
      currently: { label: "En cours", value: "GatewayHub 2.0" },
    },
    excitedLabel: "Ce qui m'enthousiasme",
    interests: [
      "Infra paiements & fintech",
      "Équipes plateforme / devtools",
      "ML + systèmes backend",
      "Flux augmentés par l'IA",
      "Rôles de lead / senior",
    ],
    copyEmail: "Copier l'e-mail",
    copied: "Copié",
    signature: "~ Ravi Kumar",
  },
  footer: {
    bio: "Team Lead et ingénieur backend — je construis des paiements, des plateformes et la couche d'observabilité qui garde la prod ennuyeuse (au bon sens du terme).",
    sitemap: "Plan du site",
    elsewhere: "Ailleurs",
    backToTop: "Haut de page",
    builtWith: "Construit avec R3F + Framer Motion · v2026.01",
    aiStackLine: "Stack IA quotidien :",
  },
};
