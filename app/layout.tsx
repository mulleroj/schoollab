import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "SchoolLab | Digitální školní projekty",
    description: "SchoolLab je vstupní brána do interaktivních projektů pro angličtinu a elektrotechniku.",
    applicationName: "SchoolLab",
    themeColor: "#071015",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "SchoolLab | Explore. Learn. Build.",
      description: "Digitální prostor pro výuku, experimentování a objevování.",
      type: "website",
      locale: "cs_CZ",
      siteName: "SchoolLab",
      images: [{ url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: "SchoolLab – digitální školní projekty" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "SchoolLab | Explore. Learn. Build.",
      description: "Digitální prostor pro výuku, experimentování a objevování.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
