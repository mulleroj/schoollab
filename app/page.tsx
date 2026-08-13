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
          <span className="brand-glyph" aria-hidden="true">
            <span />
          </span>
          <span>{siteConfig.name}</span>
        </a>
        <p className="topbar-note">Digital learning projects</p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true">01</span> Learning systems hub
          </p>
          <h1 id="hero-title">
            Vstup do <span>digitálního světa</span> školních projektů.
          </h1>
          <p className="hero-lead">{siteConfig.description}</p>
          <p className="hero-instruction">Vyber oblast a vstup do projektu.</p>
        </div>

        <div className="power-panel" aria-live="polite">
          <div className="power-status">
            <span className="status-light" aria-hidden="true" />
            <span>
              System <strong>{powered ? "online" : "ready"}</strong>
            </span>
          </div>
          <button
            className="power-switch"
            type="button"
            role="switch"
            aria-checked={powered}
            aria-label={powered ? "Ztlumit laboratorní rozhraní" : "Aktivovat laboratorní rozhraní"}
            onClick={() => setPowered((value) => !value)}
          >
            <span className="switch-track" aria-hidden="true">
              <span className="switch-knob" />
            </span>
            <span className="switch-label">{powered ? "ACTIVE" : "ACTIVATE LAB"}</span>
          </button>
          <p>
            {powered
              ? "Systém je aktivní. Zvolte svou vzdělávací zónu."
              : "Obsah je připravený. Aktivací rozsvítíte datovou síť."}
          </p>
        </div>

        <div className="hero-signal" aria-hidden="true">
          <span className="signal-origin" />
          <span className="signal-line" />
          <span className="signal-pulse" />
        </div>
      </section>

      <section className="project-network" aria-labelledby="zones-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span aria-hidden="true">02</span> Learning zones</p>
            <h2 id="zones-title">Choose your learning zone.</h2>
          </div>
          <p>Čtyři samostatné projekty. Jedna společná vstupní brána.</p>
        </div>

        <div className="network-core" aria-hidden="true">
          <span className="core-node" />
          <span className="core-label">CORE / 04</span>
        </div>

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
                <div className="zone-branch" aria-hidden="true">
                  <span />
                </div>
                <header className="zone-header">
                  <div className="zone-index">0{zoneIndex + 1}</div>
                  <div>
                    <p>{zone.label}</p>
                    <h3>{zone.title}</h3>
                  </div>
                  <span className="zone-state">{zoneProjects.length.toString().padStart(2, "0")} PORTALS</span>
                </header>

                <p className="zone-description">{zone.description}</p>

                <div className="portal-list">
                  {zoneProjects.map((project) => (
                    <a
                      className="project-portal"
                      href={project.url}
                      key={project.id}
                      aria-label={`${project.cta}: ${project.title}`}
                    >
                      <span className="portal-rail" aria-hidden="true">
                        <span />
                      </span>
                      <span className={`portal-visual visual-${project.visual}`} aria-hidden="true">
                        <span className="visual-code">{project.visualLabel}</span>
                        <span className="visual-orbit" />
                        <span className="visual-node" />
                      </span>
                      <span className="portal-content">
                        <span className="portal-meta">
                          <span>{project.shortTitle}</span>
                          <span>0{project.order}</span>
                        </span>
                        <strong>{project.title}</strong>
                        <span className="portal-description">{project.description}</span>
                        <span className="portal-tags">
                          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </span>
                        <span className="portal-cta">
                          {project.cta}<span aria-hidden="true">↗</span>
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
          <p className="eyebrow"><span aria-hidden="true">03</span> Expansion protocol</p>
          <h2 id="future-title">More labs are coming.</h2>
          <p>SchoolLab je připravený růst spolu s dalšími výukovými oblastmi.</p>
        </div>
        <div className="future-grid" aria-label="Plánované oblasti">
          {futureLabs.map((lab, index) => (
            <div className="future-lab" key={lab.id}>
              <span className="future-number">{String(index + 5).padStart(2, "0")}</span>
              <span className="future-glyph" aria-hidden="true">{lab.glyph}</span>
              <strong>{lab.title}</strong>
              <span>Queued for future expansion</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-glyph" aria-hidden="true"><span /></span>
          <strong>{siteConfig.name}</strong>
        </div>
        <p>{siteConfig.slogan}</p>
        <p>SchoolLab • Digital Learning Projects</p>
      </footer>
    </main>
  );
}
