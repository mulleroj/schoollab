# SchoolLab

Produkční webový rozcestník pro školní projekty. Homepage propojuje projekty pro angličtinu a elektrotechniku v jednotném vizuálním systému digitální laboratoře.

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
