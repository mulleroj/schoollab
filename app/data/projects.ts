export const siteConfig = {
  name: "SCHOOLLAB",
  slogan: "Explore. Learn. Build.",
  description: "Digitální prostor pro výuku, experimentování a objevování.",
} as const;

export const categoryConfig = {
  english: {
    label: "Language systems",
    title: "English Zone",
    description: "Angličtina jako otevřený prostor pro komunikaci, objevování a každodenní praxi.",
  },
  electro: {
    label: "Technical systems",
    title: "Electro Zone",
    description: "Technické prostředí pro pochopení elektřiny, měření a souvislostí v praxi.",
  },
} as const;

export type ProjectCategory = keyof typeof categoryConfig;

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  url: string;
  status: "active" | "planned";
  visual: string;
  visualLabel: string;
  cta: string;
  order: number;
};

export const projects: Project[] = [
  {
    id: "english-workshop",
    title: "The English Workshop",
    shortTitle: "Workshop 01",
    category: "english",
    description: "Komplexní prostor pro slovní zásobu, procvičování a přípravu k maturitě.",
    tags: ["Vocabulary", "Practice", "Maturita"],
    url: "https://englishworkshops.netlify.app/",
    status: "active",
    visual: "dialogue",
    visualLabel: "HELLO / READY?",
    cta: "Enter workshop",
    order: 1,
  },
  {
    id: "english-playground",
    title: "English Playground",
    shortTitle: "Interactive exercises",
    category: "english",
    description: "Interaktivní procvičování angličtiny prostřednictvím úloh, her a okamžité praxe.",
    tags: ["Exercises", "Games", "Practice"],
    url: "https://cviceni-anj.netlify.app/",
    status: "active",
    visual: "language",
    visualLabel: "A · B · C",
    cta: "Start practising",
    order: 2,
  },
  {
    id: "volt-amper-kingdom",
    title: "Volt & Amper Kingdom",
    shortTitle: "Power systems",
    category: "electro",
    description: "Sbírka aplikací, nástrojů a výzev pro budoucí elektrikáře.",
    tags: ["Apps", "Tools", "Challenges"],
    url: "https://elektrikar-apps.netlify.app/",
    status: "active",
    visual: "voltage",
    visualLabel: "U ↔ I",
    cta: "Enter kingdom",
    order: 3,
  },
  {
    id: "elektrolab",
    title: "ElektroLab",
    shortTitle: "Experiment station",
    category: "electro",
    description: "Interaktivní laboratoř, ve které lze elektrické principy prozkoumat, vyzkoušet a pochopit.",
    tags: ["Explore", "Experiment", "Understand"],
    url: "https://elektro-lab.netlify.app/",
    status: "active",
    visual: "circuit",
    visualLabel: "R₁ / R₂",
    cta: "Enter lab",
    order: 4,
  },
];

export const futureLabs = [
  { id: "society", title: "Society Lab", glyph: "◎" },
  { id: "economy", title: "Economy Lab", glyph: "↗" },
  { id: "ai", title: "AI Lab", glyph: "◇" },
  { id: "vr", title: "VR / 3D Lab", glyph: "⬡" },
] as const;
