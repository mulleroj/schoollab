export const siteConfig = {
  name: "SCHOOLLAB",
  slogan: "Explore. Learn. Build.",
  description: "Jeden prostor pro výuku, experimentování, čtení a objevování. Vyber si oblast a vstup do projektu.",
} as const;

export const categoryConfig = {
  english: {
    label: "Jazyk • komunikace • praxe",
    title: "English Zone",
    description: "Otevřený prostor pro angličtinu, komunikaci a každodenní procvičování.",
  },
  electro: {
    label: "Energie • měření • experiment",
    title: "Electro Zone",
    description: "Interaktivní laboratoř pro pochopení elektřiny, obvodů a technických souvislostí.",
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
  url: string | null;
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
    shortTitle: "Slovní zásoba a maturita",
    category: "english",
    description: "Slovní zásoba, praktické procvičování a příprava k maturitě na jednom místě.",
    tags: ["Vocabulary", "Practice", "Maturita"],
    url: "https://englishworkshops.netlify.app/",
    status: "active",
    visual: "dialogue",
    visualLabel: "HELLO!",
    cta: "Otevřít workshop",
    order: 1,
  },
  {
    id: "english-playground",
    title: "English Playground",
    shortTitle: "Interaktivní cvičení",
    category: "english",
    description: "Procvičuj angličtinu prostřednictvím interaktivních úloh, her a okamžité praxe.",
    tags: ["Exercises", "Games", "Practice"],
    url: "https://cviceni-anj.netlify.app/",
    status: "active",
    visual: "language",
    visualLabel: "A · B · C",
    cta: "Začít procvičovat",
    order: 2,
  },
  {
    id: "volt-amper-kingdom",
    title: "Volt & Amper Kingdom",
    shortTitle: "Aplikace a výzvy",
    category: "electro",
    description: "Sbírka praktických aplikací, nástrojů a výzev pro budoucí elektrikáře.",
    tags: ["Apps", "Tools", "Challenges"],
    url: "https://elektrikar-apps.netlify.app/",
    status: "active",
    visual: "voltage",
    visualLabel: "U ↔ I",
    cta: "Vstoupit do světa",
    order: 3,
  },
  {
    id: "elektrolab",
    title: "ElektroLab",
    shortTitle: "Virtuální laboratoř",
    category: "electro",
    description: "Prozkoumej, vyzkoušej a pochop elektrické principy ve virtuální laboratoři.",
    tags: ["Explore", "Experiment", "Understand"],
    url: "https://elektro-lab.netlify.app/",
    status: "active",
    visual: "circuit",
    visualLabel: "R₁ / R₂",
    cta: "Otevřít laboratoř",
    order: 4,
  },
];

export type LibraryBook = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  author: string;
  level: string;
  language: string;
  description: string;
  tags: string[];
  url: string;
  trailer?: string;
  status: "active" | "planned";
};

export const libraryBooks: LibraryBook[] = [
  {
    id: "the-portraits-secret",
    number: 1,
    title: "The Portrait's Secret",
    subtitle: "A Dorian Gray Adventure",
    author: "Oscar Wilde",
    level: "B1 English",
    language: "English",
    description: "Interaktivní adaptace klasického románu s rozhodováním, slovní zásobou a režimem pro učitele.",
    tags: ["B1", "Interactive Reading", "Classic Literature"],
    url: "https://dorian-gray-adventure-edu-b1.netlify.app/",
    trailer: "/media/the-portraits-secret-trailer.mp4",
    status: "active",
  },
];

export const futureLabs = [
  { id: "society", title: "Society Lab", glyph: "◎", url: null },
  { id: "economy", title: "Economy Lab", glyph: "↗", url: null },
  { id: "ai", title: "AI ve výuce", glyph: "◇", url: "https://ai-ve-vyuce.netlify.app/" },
  {
    id: "podopraxe",
    title: "Dekodér podpůrných opatření",
    glyph: "▣",
    url: "https://podopraxe.netlify.app/",
  },
  { id: "vr", title: "VR / 3D Lab", glyph: "⬡", url: null },
] as const;
