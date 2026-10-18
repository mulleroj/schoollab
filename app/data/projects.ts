export const siteConfig = {
  name: "SCHOOLLAB",
  slogan: "Explore. Learn. Build.",
  description: "Jeden prostor pro výuku, experimentování, čtení a objevování. Vyber si oblast a vstup do projektu.",
} as const;

export const studyTool = {
  id: "my-ai-teacher",
  label: "STUDY TOOLS / 01",
  title: "Můj AI učitel – Nauč mě to!",
  description:
    "Nerozumíš učivu? Čeká tě test? Potřebuješ si něco zapamatovat? Zkopíruj si studijní prompt do ChatGPT nebo Gemini a nech AI, aby tě provedla učením krok za krokem.",
  benefits: ["Pochopit učivo", "Procvičit znalosti", "Zapamatovat si", "Připravit se na test"],
  url: "https://muj-ai-ucitel.netlify.app/",
  cta: "Otevřít studijní prompt",
  note: "Pro všechny předměty · Funguje s bezplatným ChatGPT nebo Gemini",
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
  cover?: string;
  trailer?: string;
  trailerDurationSeconds?: number;
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
    trailerDurationSeconds: 36.432,
    status: "active",
  },
  {
    id: "pygmalion",
    number: 2,
    title: "Pygmalion",
    subtitle: "An Illustrated Interactive Storybook",
    author: "George Bernard Shaw",
    level: "A2+/B1 English",
    language: "English",
    description: "Interaktivní ilustrovaná adaptace klasické hry s rozhodováním, poslechem, jazykovými výzvami a režimem pro učitele.",
    tags: ["A2+/B1", "Interactive Reading", "Listening", "Classic Literature"],
    url: "https://pygmalionbook.netlify.app/",
    cover: "/media/pygmalion-book-cover-b2.webp",
    trailer: "/media/pygmalion-trailer-v18-final-higgins.mp4",
    trailerDurationSeconds: 39.173,
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
