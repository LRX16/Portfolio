import type { CSSProperties, ReactNode } from "react";
import type {
  CallToAction,
  ExperienceItem,
  HonorItem,
  LinkItem,
  ProjectItem,
  ResearchItem,
  SkillCategory
} from "@/data/portfolio";

type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type AboutCopy = {
  title: string;
  paragraphs: string[];
  facts: {
    label: string;
    value: string;
  }[];
};

const isExternal = (href: string) => href.startsWith("http");

function classNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

function itemStyle(index: number, total: number): CSSProperties {
  return {
    "--i": index,
    "--total": Math.max(total, 1)
  } as CSSProperties;
}

export function TextLink({ link, className }: { link: LinkItem; className?: string }) {
  return (
    <a
      href={link.href}
      target={isExternal(link.href) ? "_blank" : undefined}
      rel={isExternal(link.href) ? "noreferrer" : undefined}
      className={classNames("text-link", className)}
    >
      {link.label}
    </a>
  );
}

export function JadeSealButton({ cta, className }: { cta: CallToAction; className?: string }) {
  return (
    <a
      href={cta.href}
      className={classNames(
        "jade-seal-button",
        cta.variant === "secondary" && "secondary",
        className
      )}
    >
      <span aria-hidden="true" />
      {cta.label}
    </a>
  );
}

export function LanternNav({
  name,
  label,
  navigation
}: {
  name: string;
  label: string;
  navigation: LinkItem[];
}) {
  return (
    <header className="lantern-nav">
      <a href="#top" className="nav-medallion" aria-label={`${name} home`}>
        <span>{name.slice(0, 1)}</span>
        <strong>{name}</strong>
      </a>
      <p>{label}</p>
      <nav aria-label="Main navigation">
        {navigation.map((item, index) => (
          <a href={item.href} key={item.href} style={itemStyle(index, navigation.length)}>
            <i aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function BambooCloudDivider({ label }: { label: string }) {
  return (
    <div className="bamboo-cloud-divider" aria-hidden="true">
      <span className="divider-cloud left" />
      <strong>{label}</strong>
      <span className="divider-cloud right" />
    </div>
  );
}

function SceneHeading({
  section,
  label,
  className
}: {
  section: SectionCopy;
  label?: string;
  className?: string;
}) {
  return (
    <header className={classNames("scene-heading", className)}>
      {label ? <span className="scene-label">{label}</span> : null}
      <p className="eyebrow">{section.eyebrow}</p>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
    </header>
  );
}

export function TempleGateHero({
  name,
  eyebrow,
  headline,
  shortIntro,
  location,
  currentStatus,
  socialLinks,
  ctas,
  coordinates,
  gateLabel
}: {
  name: string;
  eyebrow: string;
  headline: string;
  shortIntro: string;
  location: string;
  currentStatus: string;
  socialLinks: LinkItem[];
  ctas: CallToAction[];
  coordinates: string[];
  gateLabel: string;
}) {
  return (
    <section id="top" className="scene palace-arrival-scene">
      <div className="ink-sky" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="palace-silhouette" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="moon-gate" aria-hidden="true">
        <span />
      </div>
      <div className="cinematic-pillars" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="roof-stack" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="valley-crest" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="training-banners" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="cloud-bridge" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="lantern-row" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="hero-banner">
        <span className="scene-label">{gateLabel}</span>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{headline}</h1>
        <p>{shortIntro}</p>
        <div className="hero-profile-meta">
          {location ? <span>{location}</span> : null}
          {currentStatus ? <span>{currentStatus}</span> : null}
        </div>
        {socialLinks.length > 0 ? (
          <div className="hero-socials">
            {socialLinks.map((link) => (
              <TextLink key={link.href} link={link} />
            ))}
          </div>
        ) : null}
        <div className="hero-actions">
          {ctas.map((cta) => (
            <JadeSealButton key={cta.href} cta={cta} />
          ))}
        </div>
      </div>

      <div className="ceremonial-steps" aria-hidden="true">
        {coordinates.map((coordinate) => (
          <span key={coordinate}>{coordinate}</span>
        ))}
      </div>
      <p className="ghost-name" aria-hidden="true">
        {name}
      </p>
    </section>
  );
}

export function ScrollChamber({
  section,
  about,
  recordLabel
}: {
  section: SectionCopy;
  about: AboutCopy;
  recordLabel: string;
}) {
  return (
    <section id="about" className="scene scroll-chamber-scene">
      <div className="round-window" aria-hidden="true" />
      <div className="scroll-chamber-grid">
        <SceneHeading section={section} label={recordLabel} className="scroll-heading" />
        <article className="open-biography-scroll">
          <div className="scroll-knob top" aria-hidden="true" />
          <div className="scroll-page">
            <p className="eyebrow">{recordLabel}</p>
            <h3>{about.title}</h3>
            {about.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
          <dl className="seal-ledger">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="scroll-knob bottom" aria-hidden="true" />
        </article>
      </div>
    </section>
  );
}

export function RelicProjectDisplay({
  section,
  projects,
  label
}: {
  section: SectionCopy;
  projects: ProjectItem[];
  label: string;
}) {
  return (
    <section id="projects" className="scene artifact-hall-scene">
      <div className="artifact-gallery">
        <aside className="artifact-gallery-legend">
          <SceneHeading section={section} label={label} className="hall-heading" />
          <span>{label}</span>
        </aside>
        <div className="artifact-gallery-scroll" aria-label="Horizontally scrollable project artifact gallery">
          <div className="artifact-gallery-track" style={itemStyle(0, projects.length)}>
            <div className="artifact-wood top" aria-hidden="true" />
            <div className="artifact-wood bottom" aria-hidden="true" />
            <div className="artifact-room-foliage" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            {projects.map((project, index) => (
              <article
                className="artifact-display"
                key={`${project.title}-${project.icon}-${index}`}
                style={itemStyle(index, projects.length)}
              >
                <div className="artifact-object" aria-hidden="true">
                  <span>{project.icon ?? String(index + 1)}</span>
                </div>
                <div className="artifact-pedestal">
                  <small>{project.status}</small>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  {project.details ? <p className="muted">{project.details}</p> : null}
                  {project.projectUrl ? (
                    <TextLink className="project-site-button" link={project.projectUrl} />
                  ) : null}
                  {project.techStack.length > 0 ? (
                    <div className="inscription-chips">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={`${tech}-${techIndex}`}>{tech}</span>
                      ))}
                    </div>
                  ) : null}
                  {project.skillsUsed.length > 0 ? (
                    <div className="project-skill-list">
                      {project.skillsUsed.map((skill, skillIndex) => (
                        <span key={`${skill}-${skillIndex}`}>{skill}</span>
                      ))}
                    </div>
                  ) : null}
                  {project.links.length > 0 ? (
                    <div className="text-link-row">
                      {project.links.map((link, linkIndex) => (
                        <TextLink key={`${link.label}-${link.href}-${linkIndex}`} link={link} />
                      ))}
                    </div>
                  ) : null}
                  {project.image ? <span className="media-placeholder">{project.image}</span> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManuscriptResearchPanel({
  section,
  items,
  label
}: {
  section: SectionCopy;
  items: ResearchItem[];
  label: string;
}) {
  return (
    <section id="research" className="scene manuscript-vault-scene">
      <div className="scroll-library">
        <aside className="scroll-library-legend">
          <SceneHeading section={section} label={label} className="vault-heading" />
          <span>{label}</span>
        </aside>
        <div className="scroll-shelf-scroll" aria-label="Horizontally scrollable research scroll library">
          <div className="scroll-shelf-track" style={itemStyle(0, items.length)}>
            <div className="shelf-wood top" aria-hidden="true" />
            <div className="shelf-wood bottom" aria-hidden="true" />
            <div className="library-foliage" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            {items.map((item, index) => (
              <article
                className="research-scroll-spine"
                key={`${item.title}-${index}`}
                style={itemStyle(index, items.length)}
                tabIndex={0}
              >
                <div className="scroll-cap top" aria-hidden="true" />
                <div className="scroll-spine-face">
                  <small>{item.status}</small>
                  <h3>{item.title}</h3>
                  <strong>{item.date}</strong>
                  <span className="wax-stamp" aria-hidden="true" />
                  <div className="seal-tags">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={`${tag}-${tagIndex}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="scroll-cap bottom" aria-hidden="true" />
                <div className="scroll-summary">
                  <p className="eyebrow">{item.researchArea}</p>
                  <h4>{item.abstract}</h4>
                  <p>{item.description}</p>
                  {item.relatedSkills.length > 0 ? (
                    <div className="research-skill-list">
                      {item.relatedSkills.map((skill, skillIndex) => (
                        <span key={`${skill}-${skillIndex}`}>{skill}</span>
                      ))}
                    </div>
                  ) : null}
                  {item.paperLink ? (
                    <TextLink
                      className="research-site-button"
                      link={item.paperLink}
                    />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DisciplineDiagram({
  section,
  skills,
  label
}: {
  section: SectionCopy;
  skills: SkillCategory[];
  label: string;
}) {
  return (
    <section id="skills" className="scene dojo-diagram-scene">
      <SceneHeading section={section} label={label} className="dojo-heading" />
      <div className="dojo-floor">
        <div className="discipline-emblem">
          <span>{label}</span>
        </div>
        <div className="floor-lines" aria-hidden="true" />
        {skills.map((group, index) => (
          <article
            className="discipline-pillar"
            key={`${group.category}-${group.icon}-${index}`}
            style={itemStyle(index, skills.length)}
          >
            <span className="technique-medallion">{group.icon ?? String(index + 1)}</span>
            {group.level ? <p>{group.level}</p> : null}
            <h3>{group.category}</h3>
            {group.description ? <p className="muted">{group.description}</p> : null}
            <ul>
              {group.skills.map((skill, skillIndex) => (
                <li key={`${skill}-${skillIndex}`}>{skill}</li>
              ))}
            </ul>
            {group.tools.length > 0 ? (
              <div className="inscription-chips">
                {group.tools.map((tool, toolIndex) => (
                  <span key={`${tool}-${toolIndex}`}>{tool}</span>
                ))}
              </div>
            ) : null}
            {group.relatedProjects.length > 0 ? (
              <p className="related-note">{group.relatedProjects.join(" / ")}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function ShrineHonorsWall({
  section,
  honors,
  label
}: {
  section: SectionCopy;
  honors: HonorItem[];
  label: string;
}) {
  return (
    <section id="honors" className="scene shrine-wall-scene">
      <div className="honor-hall">
        <aside className="honor-hall-legend">
          <SceneHeading section={section} label={label} className="shrine-heading" />
          <span>{label}</span>
        </aside>
        <div className="honor-gallery-scroll" aria-label="Horizontally scrollable honors gallery">
          <div className="honor-gallery-track" style={itemStyle(0, honors.length)}>
            <div className="honor-bamboo-rail" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="honor-hall-foliage" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            {honors.map((honor, index) => (
              <article
                className="honor-hanger"
                key={`${honor.title}-${honor.date}-${index}`}
                style={itemStyle(index, honors.length)}
              >
                <span className="honor-cord" aria-hidden="true" />
                <div className="honor-plaque">
                  <div className="honor-medallion">
                    <span>{honor.icon ?? "Star"}</span>
                  </div>
                  <div className="honor-copy">
                    <p className="eyebrow">{honor.category}</p>
                    <h3>{honor.title}</h3>
                    <p className="muted">
                      {honor.issuer} / {honor.date}
                    </p>
                    <p>{honor.description}</p>
                    {honor.rank ? <span className="rank-ribbon">{honor.rank}</span> : null}
                    {honor.relatedSkills.length > 0 ? (
                      <div className="honor-skill-list">
                        {honor.relatedSkills.map((skill, skillIndex) => (
                          <span key={`${skill}-${skillIndex}`}>{skill}</span>
                        ))}
                      </div>
                    ) : null}
                    {honor.certificate ? (
                      <TextLink link={honor.certificate} />
                    ) : null}
                    {honor.media ? <span className="media-placeholder">{honor.media}</span> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MountainRouteExperience({
  section,
  experience,
  label
}: {
  section: SectionCopy;
  experience: ExperienceItem[];
  label: string;
}) {
  return (
    <section id="experience" className="scene mountain-route-scene">
      <div className="map-silhouette" aria-hidden="true" />
      <div className="mountain-route-map">
        <aside className="roadmap-legend">
          <SceneHeading section={section} label={label} className="route-heading" />
          <span>{label}</span>
        </aside>
        <div className="roadmap-scroll" aria-label="Horizontally scrollable experience roadmap">
          <div className="roadmap-panorama" style={itemStyle(0, experience.length)}>
            <div className="mountain-roadscape" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="roadmap-temple-gate" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="map-compass-seal" aria-hidden="true">
              <span />
            </div>
            <div className="peak-markers" aria-hidden="true">
              <span>Valley Pass</span>
              <span>Cloud Ridge</span>
              <span>Summit Gate</span>
            </div>
            <svg className="route-ink" viewBox="0 0 1500 520" preserveAspectRatio="none" aria-hidden="true">
              <path d="M80 410 C165 280 250 330 330 258 C420 176 510 318 602 238 C705 148 785 292 888 214 C996 132 1075 250 1195 164 C1280 104 1375 122 1450 70" />
            </svg>
            {experience.map((item, index) => (
              <article
                className="route-stop"
                key={`${item.role}-${item.organization}-${index}`}
                style={itemStyle(index, experience.length)}
              >
                <div className="route-pin">
                  <span>{item.startDate}</span>
                </div>
                <div className="route-record">
                  <div className="experience-heading">
                    <div>
                      <p className="eyebrow">
                        {item.organization}
                        {item.roleType ? ` / ${item.roleType}` : ""}
                      </p>
                      <h3>{item.role}</h3>
                    </div>
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <p className="muted">{item.location}</p>
                  <p>{item.summary}</p>
                  {item.bullets.length > 0 ? (
                    <ul>
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.skills.length > 0 ? (
                    <div className="inscription-chips">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={`${skill}-${skillIndex}`}>{skill}</span>
                      ))}
                    </div>
                  ) : null}
                  {item.links.length > 0 ? (
                    <div className="text-link-row">
                      {item.links.map((link) => (
                        <TextLink key={`${link.label}-${link.href}`} link={link} />
                      ))}
                    </div>
                  ) : null}
                  {item.logo ? <span className="media-placeholder">{item.logo}</span> : null}
                </div>
              </article>
            ))}
            <div className="roadmap-ending-scroll" aria-hidden="true">
              <span>Summit</span>
              <strong>Archive Gate</strong>
            </div>
            <div className="scroll-hint" aria-hidden="true">
              Scroll journey
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SealedMessageContact({
  section,
  links,
  socials,
  label,
  title,
  description,
  children
}: {
  section: SectionCopy;
  links: LinkItem[];
  socials: LinkItem[];
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id="contact" className="scene message-altar-scene">
      <SceneHeading section={section} label={label} className="altar-heading" />
      <div className="message-altar">
        <div className="altar-lantern" aria-hidden="true" />
        <aside className="sealed-letter">
          <p className="eyebrow">{label}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="contact-links">
            {links.map((link) => (
              <TextLink key={link.href} link={link} />
            ))}
          </div>
          <div className="social-seals">
            {socials.map((link) => (
              <TextLink key={link.href} link={link} />
            ))}
          </div>
        </aside>
        {children}
      </div>
    </section>
  );
}
