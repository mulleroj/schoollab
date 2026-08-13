# SchoolLab

Produkční webový rozcestník pro školní projekty. Homepage propojuje projekty pro angličtinu a elektrotechniku v jednotném vizuálním systému digitální laboratoře. Produkční hosting zajišťuje Netlify z větve `main`.

## Úprava obsahu

Název webu, slogan, kategorie, projekty a plánované laboratoře jsou soustředěné v `app/data/projects.ts`. Nový projekt lze přidat jako další položku pole `projects`; homepage se z konfigurace vykreslí automaticky.

## Vývoj

```bash
npm install
npm run dev
```

Kontrola produkčního sestavení:

```bash
npm run lint
npm test
```

Web je veřejný statický rozcestník bez databáze a bez backendové aplikační logiky.

## Netlify

Konfigurace v `netlify.toml` spouští standardní Vite build a publikuje adresář `netlify-dist`. Výstup vždy obsahuje kořenový `index.html`, favicon, sociální náhled a verzované CSS/JavaScript assety.
