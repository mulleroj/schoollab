import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../netlify-dist/", import.meta.url);

test("creates a Netlify entry page with SchoolLab metadata", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html lang="cs">/i);
  assert.match(html, /<title>SchoolLab \| Digitální školní projekty<\/title>/i);
  assert.match(html, /id="root"/);
  assert.match(html, /property="og:title" content="SchoolLab \| Explore\. Learn\. Build\."/i);
  assert.match(html, /schoollab-stsul\.netlify\.app\/og\.png/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("publishes all required static assets", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");
  const assetPaths = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map(
    ([, path]) => path,
  );

  assert.ok(assetPaths.some((path) => path.endsWith(".js")), "JavaScript bundle is missing");
  assert.ok(assetPaths.some((path) => path.endsWith(".css")), "CSS bundle is missing");

  await Promise.all([
    access(new URL("favicon.svg", outputRoot)),
    access(new URL("og.png", outputRoot)),
    ...assetPaths.map((path) => access(new URL(`.${path}`, outputRoot))),
  ]);
});

test("Netlify configuration points at the generated directory", async () => {
  const config = await readFile(new URL("../netlify.toml", import.meta.url), "utf8");

  assert.match(config, /command\s*=\s*"npm run build"/);
  assert.match(config, /publish\s*=\s*"netlify-dist"/);
});
