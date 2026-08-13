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
        <div className="hero-copy">
          <p className="eyebrow">Digitální školní laboratoř</p>
          <h1 id="hero-title">
            Objevuj. Uč se. <span>Tvoř.</span>
          </h1>
          <p className="hero-lead">{siteConfig.description}</p>
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
          >
            <span className="switch-track" aria-hidden="true"><span className="switch-knob" /></span>
            <span className="switch-label">{powered ? "LAB ON" : "ROZSVÍTIT LAB"}</span>
          </button>
          <p>
            {powered
              ? "Energie proudí. Vyber si oblast a začni objevovat."
              : "Volitelný světelný efekt – všechny projekty jsou dostupné hned."}
          </p>
        </aside>

        <div className="hero-signal" aria-hidden="true">
          <span className="signal-origin" />
          <span className="signal-line" />
          <span className="signal-pulse" />
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
