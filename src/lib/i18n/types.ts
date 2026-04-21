export const locales = ["en", "hi", "ar", "es", "fr", "de", "ja"] as const;
export type Locale = (typeof locales)[number];

export type Direction = "ltr" | "rtl";

export type Dictionary = {
  meta: {
    localeName: string;
    localeShort: string;
    dir?: Direction;
  };
  nav: {
    about: string;
    work: string;
    experience: string;
    contact: string;
    letsTalk: string;
    menu: string;
    toggleTheme: string;
    toggleLanguage: string;
  };
  hero: {
    openToWork: string;
    aiAugmented: string;
    tagline: {
      lead: string;
      company: string;
      middle: string;
      productHighlight: string;
      middle2: string;
      tail: string;
    };
    seeWork: string;
    sayHello: string;
    scroll: string;
    version: string;
  };
  aiBar: {
    label: string;
    labelShort: string;
  };
  sections: {
    about: { eyebrow: string; titleLead: string; titleAccent: string };
    work: { eyebrow: string; titleLead: string; titleAccent: string };
    experience: { eyebrow: string; titleLead: string; titleAccent: string };
    credentials: { eyebrow: string; titleLead: string; titleAccent: string };
    contact: { eyebrow: string; titleLead: string; titleAccent: string };
  };
  about: {
    intro: string[];
    currently: {
      label: string;
      online: string;
      roleLine: string;
      focusLine: string;
      openLine: string;
    };
    stats: {
      label: string;
      years: string;
      leading: string;
      leadingValue: string;
    };
    workflow: {
      heading: string;
      cards: { tool: string; use: string }[];
    };
    toolkit: string;
  };
  projects: {
    impact: string;
    featured: string;
    repo: string;
    visit: string;
  };
  experience: {
    present: string;
  };
  credentials: {
    education: string;
    certifications: string;
  };
  contact: {
    copyIntro: string;
    status: {
      response: { label: string; value: string };
      basedIn: { label: string; value: string };
      availability: { label: string; value: string };
      currently: { label: string; value: string };
    };
    excitedLabel: string;
    interests: string[];
    copyEmail: string;
    copied: string;
    signature: string;
  };
  footer: {
    bio: string;
    sitemap: string;
    elsewhere: string;
    backToTop: string;
    builtWith: string;
    aiStackLine: string;
  };
};
