import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://schoollab.example/", {
      headers: { accept: "text/html", host: "schoollab.example" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete SchoolLab project hub", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="cs">/i);
  assert.match(html, /<title>SchoolLab \| Digitální školní projekty<\/title>/i);
  assert.match(html, /<h1 id="hero-title">SCHOOLLAB<\/h1>/);
  assert.match(html, /Explore\.<\/span> <span>Learn\.<\/span> <span>Build\./);
  assert.match(html, /Digitální prostor pro výuku, experimentování, čtení a objevování\./);
  assert.match(html, /class="language-world" aria-hidden="true"/);
  assert.match(html, /class="electro-world" aria-hidden="true"/);
  assert.match(html, /class="brand-connection" aria-hidden="true"/);
  assert.match(html, /Kam se dnes vydáš/);
  assert.match(html, /Prohlédnout projekty/);
  assert.match(html, /SchoolLab Library/);
  assert.match(html, /The Portrait(?:'|&#x27;)s Secret/);
  assert.match(html, /https:\/\/dorian-gray-adventure-edu-b1\.netlify\.app\//);
  assert.match(html, /target="_blank"/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.match(html, /DALŠÍ TITULY PŘIPRAVUJEME/);
  assert.match(html, /Interaktivní projekty pro výuku, procvičování, čtení i vlastní objevování\./);
  assert.doesNotMatch(html, /Čtyři interaktivní projekty pro výuku, procvičování i vlastní objevování\./);
  assert.match(html, /role="switch"/);
  assert.match(html, /aria-checked="false"/);
  assert.match(html, /https:\/\/englishworkshops\.netlify\.app\//);
  assert.match(html, /https:\/\/cviceni-anj\.netlify\.app\//);
  assert.match(html, /https:\/\/elektrikar-apps\.netlify\.app\//);
  assert.match(html, /https:\/\/elektro-lab\.netlify\.app\//);
  assert.match(html, /https:\/\/podopraxe\.netlify\.app\//);
  assert.match(html, /Nové projekty přibývají/);
  assert.match(html, /Dostupné nyní/);
  assert.match(html, /Připravujeme/);
  assert.match(html, /class="future-network"/);
  assert.match(html, /class="future-lab future-lab-active"/);
  assert.match(html, /class="future-lab future-lab-planned"/);
  assert.match(html, /EXPANSION NODE \/ 05/);
  assert.match(html, /property="og:title" content="SchoolLab \| Explore\. Learn\. Build\."/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps SchoolLab configurable and removes starter-only UI", async () => {
  const [page, layout, data, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /projects\s*\.filter/);
  assert.match(page, /Object\.entries\(categoryConfig\)/);
  assert.match(data, /export const siteConfig/);
  assert.match(data, /export const projects/);
  assert.match(data, /export type LibraryBook/);
  assert.match(data, /export const libraryBooks/);
  assert.match(data, /the-portraits-secret/);
  assert.match(data, /status: "active"/);
  assert.match(layout, /generateMetadata/);
  assert.match(styles, /\.site-shell\[data-powered="true"\] \.project-portal:hover/);
  assert.match(styles, /\.site-shell\[data-powered="true"\]\[data-active-zone="english"\]/);
  assert.match(styles, /\.site-shell\[data-powered="true"\] \.library-shelf-line::after/);
  assert.match(styles, /@keyframes library-shelf-signal/);
  assert.match(styles, /\.library-spines:hover \.library-spine/);
  assert.match(styles, /\.site-shell\[data-powered="true"\] \.library-spine::after/);
  assert.match(styles, /@keyframes library-spine-wake-light/);
  assert.match(styles, /@keyframes library-spine-hover/);
  assert.match(styles, /translateY\(-6px\)/);
  assert.match(styles, /library-spines:hover \.library-spine:hover/);
  assert.doesNotMatch(styles, /\.site-shell\[data-powered="true"\] \.library-spine\s*\{\s*animation:/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /future-network-rail/);
  assert.match(styles, /future-planned-wake/);
  assert.match(styles, /future-expansion-signal/);
  assert.match(styles, /future-rail-signal/);
  assert.match(styles, /future-lab-planned/);
  assert.match(styles, /future-network-rail > span,[\s\S]*future-lab-planned/);
  assert.match(page, /className="library-spines" aria-hidden="true"/);
  assert.match(styles, /\.project-portal:focus-visible\s*\{[^}]*outline: 2px solid var\(--accent\)/s);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
