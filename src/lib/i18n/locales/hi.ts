import type { Dictionary } from "../types";

export const hi: Dictionary = {
  meta: { localeName: "हिन्दी", localeShort: "हि", dir: "ltr" },
  nav: {
    about: "परिचय",
    work: "काम",
    experience: "अनुभव",
    contact: "संपर्क",
    letsTalk: "बात करें",
    menu: "मेन्यू",
    toggleTheme: "थीम बदलें",
    toggleLanguage: "भाषा बदलें",
  },
  hero: {
    openToWork: "नए अवसरों के लिए उपलब्ध",
    aiAugmented: "AI-संवर्धित वर्कफ़्लो",
    tagline: {
      lead: "टीम लीड —",
      company: "Nexora Technology",
      middle: ", 5 इंजीनियरों की टीम के साथ",
      productHighlight: "GatewayHub 2.0",
      middle2: " पर काम कर रहा हूँ — हमारा पेमेंट्स प्लेटफ़ॉर्म। 4+ सालों से",
      tail: " और भरोसेमंद बैकएंड बना रहा हूँ।",
    },
    seeWork: "चुनिंदा काम देखें",
    sayHello: "नमस्ते कहें",
    scroll: "स्क्रॉल",
    version: "v2026 · three.js",
  },
  aiBar: {
    label: "दैनिक AI स्टैक",
    labelShort: "AI स्टैक",
  },
  sections: {
    about: {
      eyebrow: "परिचय",
      titleLead: "बैकएंड जो",
      titleAccent: "चुपचाप स्केल करते हैं।",
    },
    work: {
      eyebrow: "चुनिंदा काम",
      titleLead: "सिस्टम जो",
      titleAccent: "शिप किए।",
    },
    experience: {
      eyebrow: "करियर",
      titleLead: "जहाँ मैंने",
      titleAccent: "काम किया।",
    },
    credentials: {
      eyebrow: "योग्यताएँ",
      titleLead: "रसीद &",
      titleAccent: "सबूत।",
    },
    contact: {
      eyebrow: "संपर्क",
      titleLead: "चलिए कुछ",
      titleAccent: "बनाते हैं।",
    },
  },
  about: {
    intro: [
      "मैं एक टीम लीड और बैकएंड इंजीनियर हूँ, जिसके पास कंज़्यूमर और SaaS प्रोडक्ट्स के लिए सिस्टम डिज़ाइन और स्केल करने का 4+ साल का अनुभव है। मेरा काम विश्वसनीयता, लागत और रेवेन्यू के बीच रहता है — पेमेंट गेटवे, सब्सक्रिप्शन प्लेटफ़ॉर्म, रियल-टाइम ML इन्फ़रेंस, और वो observability जो प्रोडक्शन को ईमानदार रखती है।",
      "अभी Nexora Technology में हूँ, 5 इंजीनियरों की टीम के साथ GatewayHub 2.0 पर काम कर रहा हूँ — हमारे पेमेंट्स प्लेटफ़ॉर्म की अगली जनरेशन, जिसमें मर्चेंट पोर्टल, कोर API और in-product चैट शामिल हैं। इससे पहले Somish Blockchain Labs (Hunch) में, मैंने RevenueCat और Stripe के साथ backend-driven सब्सक्रिप्शन बनाया, और AWS Personalize को Airflow retraining pipeline से बदला जिससे $10K/month बचा।",
      "मुझे ऐसे सिस्टम पसंद हैं जो gracefully degrade हों, इंजीनियरिंग और प्रोडक्ट के बीच tight feedback loops हों, और कोड ऐसा हो जो अगला on-call engineer ख़ुशी से inherit करे। रोज़मर्रा में AI पर काफ़ी निर्भर करता हूँ — Claude, Cursor और Copilot का उपयोग design notes, Jira ticket breakdowns, PR drafting और first-pass code review के लिए, ताकि टीम उन समस्याओं पर time दे जिनके लिए इंसान ज़रूरी हैं।",
    ],
    currently: {
      label: "अभी",
      online: "● ऑनलाइन",
      roleLine: "टीम लीड — Nexora Technology",
      focusLine: "GatewayHub 2.0 (payments) पर 5 इंजीनियरों को लीड कर रहा हूँ",
      openLine: "प्लेटफ़ॉर्म & फ़िनटेक बातचीत के लिए उपलब्ध",
    },
    stats: {
      label: "आँकड़े",
      years: "साल",
      leading: "लीड",
      leadingValue: "5 इंजीनियर",
    },
    workflow: {
      heading: "मैं कैसे काम करता हूँ — AI-संवर्धित",
      cards: [
        { tool: "Claude", use: "Design notes, PRDs, system-design के लिए" },
        { tool: "Cursor + Claude", use: "Jira ticket breakdown & acceptance criteria" },
        { tool: "Cursor", use: "Implementation, PR drafts, context-aware refactors" },
        { tool: "Copilot + Claude", use: "First-pass code review & code quality जांच" },
      ],
    },
    toolkit: "टूलकिट",
  },
  projects: {
    impact: "प्रभाव",
    featured: "मुख्य",
    repo: "रेपो",
    visit: "लिंक",
  },
  experience: { present: "अभी तक" },
  credentials: {
    education: "शिक्षा",
    certifications: "सर्टिफ़िकेशन्स",
  },
  contact: {
    copyIntro:
      "मैं हमेशा ambitious ideas, hard problems और अच्छी engineering के लिए तैयार हूँ। ईमेल सबसे तेज़ है — आमतौर पर उसी दिन जवाब देता हूँ।",
    status: {
      response: { label: "जवाब", value: "< 24 घंटे" },
      basedIn: { label: "स्थान", value: "नई दिल्ली, भारत" },
      availability: { label: "उपलब्धता", value: "नए रोल के लिए उपलब्ध" },
      currently: { label: "अभी", value: "GatewayHub 2.0" },
    },
    excitedLabel: "क्या मुझे उत्साहित करता है",
    interests: [
      "पेमेंट्स & फ़िनटेक infra",
      "प्लेटफ़ॉर्म / devtools टीम",
      "ML + बैकएंड सिस्टम",
      "AI-संवर्धित वर्कफ़्लो",
      "Lead / सीनियर रोल",
    ],
    copyEmail: "ईमेल कॉपी करें",
    copied: "कॉपी हो गया",
    signature: "~ रवि कुमार",
  },
  footer: {
    bio: "टीम लीड & बैकएंड इंजीनियर — पेमेंट्स, प्लेटफ़ॉर्म और observability बनाता हूँ जो प्रोडक्शन को boring रखती है।",
    sitemap: "साइटमैप",
    elsewhere: "अन्य जगह",
    backToTop: "ऊपर जाएँ",
    builtWith: "R3F + Framer Motion से बनाया · v2026.01",
    aiStackLine: "दैनिक AI स्टैक:",
  },
};
