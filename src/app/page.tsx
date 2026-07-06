"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { portfolio } from "@/data/portfolio";
import {
  AncientFrame,
  RuneDivider,
  Seal,
  TempleSectionHeader,
  TextLink
} from "@/components/temple-ui";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

export default function Home() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: ""
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: "sending", message: "Sending message..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        website: formData.get("website")
      })
    });

    const result = (await response.json()) as { ok?: boolean; message?: string };

    if (!response.ok || !result.ok) {
      setFormState({
        status: "error",
        message: result.message ?? "Something went wrong. Please try again."
      });
      return;
    }

    setFormState({
      status: "success",
      message: result.message ?? "Message received."
    });
    form.reset();
  }

  return (
    <main>
      <div className="ambient-map" aria-hidden="true" />
      <div className="mountain-silhouette" aria-hidden="true" />

      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label={`${portfolio.hero.name} home`}>
          <span>{portfolio.hero.name.slice(0, 1)}</span>
          <strong>{portfolio.hero.name}</strong>
        </a>
        <nav aria-label="Main navigation">
          {portfolio.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-section">
        <Image
          src={portfolio.hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-runes" aria-hidden="true" />
        <div className="temple-gate" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-portal" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content">
          <div className="portal-seal" aria-hidden="true">
            <span />
          </div>
          <p className="eyebrow">{portfolio.hero.eyebrow}</p>
          <h1>{portfolio.hero.headline}</h1>
          <p>{portfolio.hero.subtitle}</p>
          <div className="hero-actions">
            {portfolio.hero.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={cta.variant === "secondary" ? "button secondary" : "button primary"}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-coordinates" aria-hidden="true">
          <span>Archive 01</span>
          <span>Temple Gate</span>
          <span>Summit Path</span>
        </div>
        <div className="map-strip" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <RuneDivider label="Inscription Wall" />
      <section id="about" className="content-section about-layout chamber-section about-chamber">
        <TempleSectionHeader {...portfolio.sections.about} />
        <AncientFrame className="inscription-panel inscription-wall">
          <div className="wall-rubbing" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="archive-copy">
            <p className="eyebrow">Archive Record</p>
            <h3>{portfolio.about.title}</h3>
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="fact-grid archive-facts">
            {portfolio.about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </AncientFrame>
      </section>

      <RuneDivider label="Relic Vault" />
      <section id="projects" className="content-section projects-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.projects} />
        <div className="artifact-vault">
          <div className="vault-backdrop" aria-hidden="true" />
          <div className="artifact-grid relic-display">
            {portfolio.projects.map((project) => (
              <article className="artifact-card relic-card" key={project.title + project.icon}>
                <div className="relic-cap" aria-hidden="true" />
                <div className="card-topline">
                  <Seal className="relic-index">{project.icon ?? "P"}</Seal>
                  <span>{project.status}</span>
                </div>
                <div className="relic-face">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  {project.details ? <p className="muted">{project.details}</p> : null}
                </div>
                <div className="chip-row">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="card-links">
                  {project.github ? <TextLink link={{ label: "GitHub", href: project.github }} /> : null}
                  {project.demo ? <TextLink link={{ label: "Demo", href: project.demo }} /> : null}
                </div>
                <div className="relic-base" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <RuneDivider label="Scroll Repository" />
      <section id="research" className="content-section research-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.research} />
        <div className="scroll-shelf">
          {portfolio.research.map((item, itemIndex) => (
            <article className="scroll-card scroll-fragment" key={`${item.title}-${itemIndex}`}>
              <div className="scroll-spine" aria-hidden="true" />
              <span>{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="chip-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {item.link ? <TextLink link={{ label: "Open fragment", href: item.link }} /> : null}
            </article>
          ))}
        </div>
      </section>

      <RuneDivider label="Constellation Mural" />
      <section id="skills" className="content-section skills-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.skills} align="center" />
        <div className="skill-map constellation-chart">
          <div className="constellation-orbit" aria-hidden="true" />
          {portfolio.skills.map((group) => (
            <article className="skill-node constellation-node" key={group.category + group.icon}>
              <Seal>{group.icon ?? "S"}</Seal>
              <div>
                <p>{group.level}</p>
                <h3>{group.category}</h3>
              </div>
              <ul>
                {group.skills.map((skill, skillIndex) => (
                  <li key={`${skill}-${skillIndex}`}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <RuneDivider label="Shrine Dais" />
      <section id="honors" className="content-section honors-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.honors} />
        <div className="shrine-dais">
          <div className="shrine-arch" aria-hidden="true" />
          <div className="honor-grid">
            {portfolio.honors.map((honor, honorIndex) => (
              <article className="honor-card shrine-plaque" key={`${honor.title}-${honor.date}-${honorIndex}`}>
                <div className="medallion">{honor.icon ?? "Seal"}</div>
                <div>
                  <p className="eyebrow">{honor.category}</p>
                  <h3>{honor.title}</h3>
                  <p className="muted">
                    {honor.issuer} / {honor.date}
                  </p>
                  <p>{honor.description}</p>
                  {honor.rank ? <span className="rank-label">{honor.rank}</span> : null}
                  {honor.certificate ? (
                    <TextLink link={{ label: "Certificate", href: honor.certificate }} />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RuneDivider label="Expedition Route" />
      <section id="experience" className="content-section experience-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.experience} />
        <div className="experience-map">
          <div className="route-line" aria-hidden="true" />
          <div className="experience-path">
            {portfolio.experience.map((item, itemIndex) => (
              <article className="experience-card route-record" key={`${item.role}-${item.organization}-${itemIndex}`}>
                <div className="path-marker">{item.icon ?? "Log"}</div>
                <div>
                  <div className="experience-heading">
                    <div>
                      <p className="eyebrow">{item.organization}</p>
                      <h3>{item.role}</h3>
                    </div>
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <p className="muted">{item.location}</p>
                  <p>{item.description}</p>
                  <ul>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="chip-row">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={`${skill}-${skillIndex}`}>{skill}</span>
                    ))}
                  </div>
                  {item.link ? <TextLink link={{ label: "Related link", href: item.link }} /> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RuneDivider label="Pilgrimage Markers" />
      <section id="timeline" className="content-section timeline-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.timeline} align="center" />
        <div className="journey-path pilgrimage-route">
          {portfolio.timeline.map((item, index) => (
            <article className="journey-card pilgrimage-marker" key={`${item.title}-${item.date}-${index}`}>
              <div className="journey-index">{String(index + 1).padStart(2, "0")}</div>
              <p className="eyebrow">
                {item.icon} / {item.category}
              </p>
              <h3>{item.title}</h3>
              <span>{item.date}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <RuneDivider label="Oracle Channel" />
      <section id="contact" className="content-section contact-layout contact-section chamber-section">
        <TempleSectionHeader {...portfolio.sections.contact} />
        <AncientFrame className="contact-panel oracle-console">
          <div className="oracle-ring" aria-hidden="true" />
          <div className="contact-copy">
            <p className="eyebrow">Archive Channel</p>
            <h3>{portfolio.contact.formTitle}</h3>
            <p>{portfolio.contact.formDescription}</p>
            <div className="link-list">
              {portfolio.contact.links.map((link) => (
                <TextLink key={link.href} link={link} />
              ))}
            </div>
            <div className="social-row">
              {portfolio.contact.socials.map((link) => (
                <TextLink key={link.href} link={link} />
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form message-slab">
            <label>
              Name
              <input name="name" type="text" minLength={2} maxLength={100} required />
            </label>
            <label>
              Email
              <input name="email" type="email" maxLength={180} required />
            </label>
            <label className="hidden-field">
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              Message
              <textarea name="message" minLength={10} maxLength={3000} rows={6} required />
            </label>
            <button className="button primary" type="submit" disabled={formState.status === "sending"}>
              {formState.status === "sending" ? "Sending..." : "Send message"}
            </button>
            {formState.message ? (
              <p className={formState.status === "error" ? "form-message error" : "form-message"}>
                {formState.message}
              </p>
            ) : null}
          </form>
        </AncientFrame>
      </section>
    </main>
  );
}
