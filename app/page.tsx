"use client";

import { useState } from "react";
import {
  categoryConfig,
  futureLabs,
  libraryBooks,
  projects,
  siteConfig,
  type LibraryBook,
  type ProjectCategory,
} from "./data/projects";

export default function Home() {
  const [powered, setPowered] = useState(false);
  const [activeZone, setActiveZone] = useState<ProjectCategory | null>(null);

  const zones = Object.entries(categoryConfig) as [
    ProjectCategory,
    (typeof categoryConfig)[ProjectCategory],
  ][];
  const activeFutureLabs = futureLabs.filter((lab) => lab.url !== null);
  const plannedFutureLabs = futureLabs.filter((lab) => lab.url === null);

  const renderLibraryBook = (book: LibraryBook) => {
    const content = (
      <>
        <div className="book-cover" aria-hidden="true">
          <div className="book-cover-frame">
            <span className="book-cover-kicker">TITUL {String(book.number).padStart(2, "0")}</span>
            <span className="book-cover-ornament">✦</span>
            <strong className="book-cover-title">{book.title}</strong>
            <span className="book-cover-rule" />
            <span className="book-cover-subtitle">{book.subtitle}</span>
            <span className="book-cover-author">{book.author}</span>
          </div>
        </div>
        <div className="library-book-content">
          <div className="library-book-meta">
            <span>INTERACTIVE READING</span>
            <span>{book.level}</span>
          </div>
          <h3>{book.title}</h3>
          <p className="library-book-subtitle">{book.subtitle}</p>
          <p className="library-book-description">{book.description}</p>
          <div className="library-book-tags">
            {book.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <span className="library-book-cta">
            <span>Otevřít knihu</span>
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </>
    );

    return book.status === "active" && book.url ? (
      <a
        aria-label={`${book.title} – otevřít knihu`}
        className="library-book"
        href={book.url}
        key={book.id}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    ) : (
      <article className="library-book library-book-planned" key={book.id}>
        {content}
      </article>
    );
  };

  const renderFutureLab = (lab: (typeof futureLabs)[number]) => {
    const content = (
      <>
        <span className="future-node" aria-hidden="true" />
        <span className="future-glyph" aria-hidden="true">{lab.glyph}</span>
        <strong>{lab.title}</strong>
      </>
    );

    return lab.url ? (
      <a
        aria-label={`${lab.title} – aktivní, otevřít projekt`}
        className="future-lab future-lab-active"
        href={lab.url}
        key={lab.id}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
        <span className="future-status" aria-label="Aktivní">
          <span className="future-status-dot" aria-hidden="true" />
          Aktivní
        </span>
        <span className="future-arrow" aria-hidden="true">↗</span>
      </a>
    ) : (
      <span className="future-lab future-lab-planned" key={lab.id}>
        {content}
        <span className="future-status future-status-planned" aria-label="Připravujeme">
          <span className="future-status-dot" aria-hidden="true" />
          Připravujeme
        </span>
      </span>
    );
  };

  return (
    <main
      className="site-shell"
      data-powered={powered}
      data-active-zone={activeZone ?? "none"}
    >
      <div className="ambient-grid" aria-hidden="true" />

      <header className="topbar">
        <a className="brand-mark" href="#top" aria-label={`${siteConfig.name} – začátek stránky`}>
          <span className="brand-glyph" aria-hidden="true"><span /></span>
          <span>{siteConfig.name}</span>
        </a>
        <p className="topbar-note">Digital learning projects</p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="language-world" aria-hidden="true">
          <span className="world-label">Language world</span>
          <div className="language-globe">
            <span className="globe-latitude latitude-one" />
            <span className="globe-latitude latitude-two" />
            <span className="globe-longitude longitude-one" />
            <span className="globe-longitude longitude-two" />
            <span className="globe-land land-one" />
            <span className="globe-land land-two" />
            <span className="globe-node node-one" />
            <span className="globe-node node-two" />
          </div>
          <div className="greeting greeting-hello">Hello</div>
          <div className="greeting greeting-hallo">Hallo</div>
          <div className="greeting greeting-hola">¡Hola!</div>
          <div className="greeting greeting-bonjour">Bonjour</div>
          <div className="greeting greeting-ahoj">Ahoj</div>
          <div className="speech-bubble bubble-quote">“</div>
          <div className="speech-bubble bubble-dots"><span /><span /><span /></div>
        </div>

        <div className="hero-center">
          <div className="hero-copy">
            <p className="eyebrow">Digitální školní laboratoř</p>
            <h1 id="hero-title">SCHOOLLAB</h1>
            <p className="hero-slogan" aria-label={siteConfig.slogan}>
              <span>Explore.</span> <span>Learn.</span> <span>Build.</span>
            </p>
            <p className="hero-lead">Digitální prostor pro výuku, experimentování, čtení a objevování.</p>
            <a className="hero-link" href="#projects">
              Prohlédnout projekty <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="power-panel" aria-label="Atmosféra laboratoře" aria-live="polite">
            <div className="power-status">
              <span className="status-light" aria-hidden="true" />
              <span>Lab <strong>{powered ? "rozsvícen" : "připraven"}</strong></span>
            </div>
            <button
              className="power-switch"
              type="button"
              role="switch"
              aria-checked={powered}
              aria-label={powered ? "Ztlumit atmosféru laboratoře" : "Rozsvítit atmosféru laboratoře"}
              onClick={() => setPowered((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setPowered((value) => !value);
                }
              }}
            >
              <span className="switch-track" aria-hidden="true"><span className="switch-knob" /></span>
              <span className="switch-label">{powered ? "LAB ON" : "ROZSVÍTIT LAB"}</span>
            </button>
            <p>
              {powered
                ? "SchoolLab je aktivní. Oba světy i projektová síť jsou pod proudem."
                : "Všechny projekty jsou dostupné. Rozsviť SchoolLab a aktivuj jeho atmosféru."}
            </p>
          </aside>
        </div>

        <div className="electro-world" aria-hidden="true">
          <span className="world-label">Electro world</span>
          <svg className="circuit-board" viewBox="0 0 310 350" focusable="false">
            <g className="circuit-lines" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 58h55l21 23h58" />
              <path d="M18 96h88l35 35h57" />
              <path d="M198 131h39v47" />
              <path d="M46 276h71v-50h52" />
              <path d="M169 226h46v-31h47" />
              <path d="M215 226h52v50h25" />
              <path d="M117 276h121" />
            </g>
            <g className="circuit-nodes" fill="currentColor">
              <circle cx="18" cy="58" r="5" /><circle cx="18" cy="96" r="5" />
              <circle cx="198" cy="131" r="4" /><circle cx="46" cy="276" r="5" />
              <circle cx="117" cy="276" r="4" /><circle cx="215" cy="226" r="4" />
              <circle cx="292" cy="276" r="5" />
            </g>
            <g className="meter" transform="translate(166 28)">
              <path d="M0 58a55 55 0 0 1 110 0" fill="none" stroke="currentColor" strokeWidth="2" />
              <path className="meter-needle" d="M55 58 106 58" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="55" cy="58" r="5" fill="currentColor" />
              <text x="55" y="80" textAnchor="middle">V</text>
            </g>
            <g className="led" transform="translate(140 166)">
              <path d="M7 24V9a12 12 0 0 1 24 0v15" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M3 24h32M11 24v36M27 24v36" fill="none" stroke="currentColor" strokeWidth="2" />
              <path className="led-fill" d="M12 18V9a7 7 0 0 1 14 0v9Z" />
            </g>
            <g className="resistor" transform="translate(166 268)" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 8h17l4-8 8 16 8-16 8 16 4-8h17" />
            </g>
          </svg>
        </div>

        <div className="brand-connection" aria-hidden="true">
          <svg viewBox="0 0 1440 122" preserveAspectRatio="none" focusable="false">
            <defs>
              <linearGradient id="brand-line-gradient" x1="0" x2="1">
                <stop offset="0" stopColor="var(--cyan)" />
                <stop offset="0.48" stopColor="#c6d6d7" />
                <stop offset="1" stopColor="var(--amber)" />
              </linearGradient>
            </defs>
            <path className="connection-ghost" d="M0 57C170 5 254 105 399 55S640 42 720 70s181 47 310-12 244 23 410-11" />
            <path className="connection-line" pathLength="1" d="M0 57C170 5 254 105 399 55S640 42 720 70s181 47 310-12 244 23 410-11" />
            <path className="connection-pulse" pathLength="1" d="M0 57C170 5 254 105 399 55S640 42 720 70s181 47 310-12 244 23 410-11" />
          </svg>
        </div>
      </section>

      <section className="project-network" id="projects" aria-labelledby="zones-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Vyber si oblast</p>
            <h2 id="zones-title">Kam se dnes vydáš?</h2>
          </div>
          <p>Interaktivní projekty pro výuku, procvičování, čtení i vlastní objevování.</p>
        </div>

        <div className="network-core" aria-hidden="true"><span className="core-node" /></div>

        <div className="zones-grid">
          {zones.map(([category, zone], zoneIndex) => {
            const zoneProjects = projects
              .filter((project) => project.category === category && project.status === "active")
              .sort((a, b) => a.order - b.order);

            return (
              <article
                className={`zone zone-${category}`}
                key={category}
                onMouseEnter={() => setActiveZone(category)}
                onMouseLeave={() => setActiveZone(null)}
                onFocus={() => setActiveZone(category)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setActiveZone(null);
                }}
              >
                <div className="zone-branch" aria-hidden="true"><span /></div>
                <header className="zone-header">
                  <span className="zone-symbol" aria-hidden="true">{category === "english" ? "Aa" : "Ω"}</span>
                  <div>
                    <p>{zone.label}</p>
                    <h3>{zone.title}</h3>
                  </div>
                  <span className="zone-count">0{zoneIndex + 1}</span>
                </header>

                <p className="zone-description">{zone.description}</p>

                <div className={`zone-atmosphere atmosphere-${category}`} aria-hidden="true">
                  {category === "english" ? (
                    <><span>Hello</span><span>How are you?</span><span>Let&apos;s explore</span></>
                  ) : (
                    <><span>12.4 V</span><span>0.82 A</span><span>R = U / I</span></>
                  )}
                </div>

                <div className="portal-list">
                  {zoneProjects.map((project) => (
                    <a
                      className="project-portal"
                      href={project.url}
                      key={project.id}
                      aria-label={`${project.cta}: ${project.title}`}
                    >
                      <span className="portal-rail" aria-hidden="true"><span /></span>
                      <span className={`portal-visual visual-${project.visual}`} aria-hidden="true">
                        <span className="visual-code">{project.visualLabel}</span>
                        <span className="visual-orbit" />
                        <span className="visual-node" />
                      </span>
                      <span className="portal-content">
                        <span className="portal-meta">{project.shortTitle}</span>
                        <strong>{project.title}</strong>
                        <span className="portal-description">{project.description}</span>
                        <span className="portal-tags">
                          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </span>
                        <span className="portal-cta">
                          <span>{project.cta}</span>
                          <span aria-hidden="true">↗</span>
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="library-section" id="library" aria-labelledby="library-title">
        <div className="library-heading">
          <div className="library-intro">
            <p className="eyebrow">INTERACTIVE READING</p>
            <h2 id="library-title">SchoolLab Library</h2>
          </div>
          <p>Klasická literatura jako interaktivní čtenářské dobrodružství. Čti, rozhoduj se a sleduj, jak tvoje volby mění příběh.</p>
        </div>

        <div className="library-shelf" aria-label="Knihy ve SchoolLab Library">
          <div className="library-books">
            {libraryBooks.filter((book) => book.status === "active" && book.url).map(renderLibraryBook)}
          </div>

          <aside className="library-coming-soon" aria-labelledby="library-coming-title">
            <div className="library-spines" aria-hidden="true">
              <span className="library-spine spine-one" />
              <span className="library-spine spine-two" />
              <span className="library-spine spine-three" />
              <span className="library-spine spine-four" />
            </div>
            <p className="library-coming-kicker">DALŠÍ TITULY PŘIPRAVUJEME</p>
            <h3 id="library-coming-title">Knihovna se bude postupně rozrůstat.</h3>
            <p>Další interaktivní svazky přibudou na polici postupně.</p>
          </aside>

          <div className="library-shelf-line" aria-hidden="true" />
        </div>
      </section>

      <section className="future-section" aria-labelledby="future-title">
        <div className="future-intro">
          <div className="future-expansion-mark" aria-hidden="true">
            <span className="future-expansion-code">EXPANSION NODE / 05</span>
            <span className="future-expansion-track"><span /></span>
          </div>
          <p className="eyebrow">SchoolLab se rozšiřuje</p>
          <h2 id="future-title">Nové projekty přibývají.</h2>
          <p>Některé už můžeš otevřít, další oblasti postupně připravujeme.</p>
        </div>
        <div className="future-network">
          <span className="future-network-rail" aria-hidden="true"><span /></span>
          <div className="future-groups">
            <div className="future-group" role="group" aria-labelledby="future-active-title">
              <div className="future-group-heading">
                <div>
                  <p className="future-group-kicker">Aktivní projekty</p>
                  <h3 id="future-active-title">Dostupné nyní</h3>
                </div>
                <span className="future-group-count" aria-label={`${activeFutureLabs.length} aktivní projekty`}>
                  {String(activeFutureLabs.length).padStart(2, "0")}
                </span>
              </div>
              <div className="future-list" aria-label="Dostupné projekty">
                {activeFutureLabs.map(renderFutureLab)}
              </div>
            </div>

            <div className="future-group future-group-planned" role="group" aria-labelledby="future-planned-title">
              <div className="future-group-heading">
                <div>
                  <p className="future-group-kicker">Další směry</p>
                  <h3 id="future-planned-title">Připravujeme</h3>
                </div>
                <span className="future-group-count" aria-label={`${plannedFutureLabs.length} připravované projekty`}>
                  {String(plannedFutureLabs.length).padStart(2, "0")}
                </span>
              </div>
              <div className="future-list" aria-label="Připravované projekty">
                {plannedFutureLabs.map(renderFutureLab)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-glyph" aria-hidden="true"><span /></span>
          <strong>{siteConfig.name}</strong>
        </div>
        <p>{siteConfig.slogan}</p>
        <div className="footer-meta">
          <p>Digital Learning Projects</p>
          <p className="footer-signature">AI + 👤 | HUMAN IN THE LOOP</p>
        </div>
      </footer>
    </main>
  );
}
