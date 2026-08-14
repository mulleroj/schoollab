"use client";

import { useState } from "react";
import {
  categoryConfig,
  futureLabs,
  projects,
  siteConfig,
  type ProjectCategory,
} from "./data/projects";

export default function Home() {
  const [powered, setPowered] = useState(false);
  const [activeZone, setActiveZone] = useState<ProjectCategory | null>(null);

  const zones = Object.entries(categoryConfig) as [
    ProjectCategory,
    (typeof categoryConfig)[ProjectCategory],
  ][];

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
            <p className="hero-lead">Digitální prostor pro výuku, experimentování a objevování.</p>
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
              <path d="M55 58 86 31" fill="none" stroke="currentColor" strokeWidth="2.5" />
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
          <p>Čtyři interaktivní projekty pro výuku, procvičování i vlastní objevování.</p>
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

      <section className="future-section" aria-labelledby="future-title">
        <div className="future-intro">
          <p className="eyebrow">SchoolLab roste</p>
          <h2 id="future-title">Další témata jsou na cestě.</h2>
          <p>Postupně přibudou nové oblasti pro společenské vědy, ekonomiku i digitální technologie.</p>
        </div>
        <div className="future-list" aria-label="Plánované oblasti">
          {futureLabs.map((lab) => (
            <span className="future-lab" key={lab.id}>
              <span className="future-glyph" aria-hidden="true">{lab.glyph}</span>
              <strong>{lab.title}</strong>
            </span>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-glyph" aria-hidden="true"><span /></span>
          <strong>{siteConfig.name}</strong>
        </div>
        <p>{siteConfig.slogan}</p>
        <p>Digital Learning Projects</p>
      </footer>
    </main>
  );
}
