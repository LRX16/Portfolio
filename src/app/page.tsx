"use client";

import { FormEvent, useState } from "react";
import { portfolio } from "@/data/portfolio";
import {
  BambooCloudDivider,
  DisciplineDiagram,
  LanternNav,
  ManuscriptResearchPanel,
  MountainRouteExperience,
  PilgrimageJourney,
  RelicProjectDisplay,
  ScrollChamber,
  SealedMessageContact,
  ShrineHonorsWall,
  TempleGateHero
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
    <main className="cinematic-temple-world">
      <div className="world-mist" aria-hidden="true" />
      <div className="ink-wash-layer" aria-hidden="true" />
      <div className="bamboo-depth" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="spirit-dragon-layer" aria-hidden="true">
        <span className="dragon-spirit dragon-one">
          <i />
          <i />
          <i />
          <i />
          <b />
        </span>
        <span className="dragon-spirit dragon-two">
          <i />
          <i />
          <i />
          <i />
          <b />
        </span>
      </div>
      <div className="martial-silhouette-layer" aria-hidden="true">
        <span className="martial-figure figure-one">
          <i />
          <b />
          <em />
        </span>
        <span className="martial-figure figure-two">
          <i />
          <b />
          <em />
        </span>
        <span className="martial-figure figure-three">
          <i />
          <b />
          <em />
        </span>
      </div>

      <LanternNav
        name={portfolio.hero.name}
        label={portfolio.theme.sceneLabels.navigation}
        navigation={portfolio.navigation}
      />

      <TempleGateHero
        name={portfolio.hero.name}
        eyebrow={portfolio.hero.eyebrow}
        headline={portfolio.hero.headline}
        shortIntro={portfolio.hero.shortIntro}
        location={portfolio.hero.location}
        currentStatus={portfolio.hero.currentStatus}
        socialLinks={portfolio.hero.socialLinks}
        ctas={portfolio.hero.ctas}
        coordinates={portfolio.theme.heroCoordinates}
        gateLabel={portfolio.theme.sceneLabels.heroGate}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.about} />
      <ScrollChamber
        section={portfolio.sections.about}
        about={portfolio.about}
        recordLabel={portfolio.theme.aboutRecordLabel}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.projects} />
      <RelicProjectDisplay
        section={portfolio.sections.projects}
        projects={portfolio.projects}
        label={portfolio.theme.sceneLabels.artifactHall}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.research} />
      <ManuscriptResearchPanel
        section={portfolio.sections.research}
        items={portfolio.research}
        label={portfolio.theme.sceneLabels.manuscriptVault}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.skills} />
      <DisciplineDiagram
        section={portfolio.sections.skills}
        skills={portfolio.skills}
        label={portfolio.theme.sceneLabels.disciplineCore}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.honors} />
      <ShrineHonorsWall
        section={portfolio.sections.honors}
        honors={portfolio.honors}
        label={portfolio.theme.sceneLabels.honorShrine}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.experience} />
      <MountainRouteExperience
        section={portfolio.sections.experience}
        experience={portfolio.experience}
        label={portfolio.theme.sceneLabels.expeditionMap}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.timeline} />
      <PilgrimageJourney
        section={portfolio.sections.timeline}
        items={portfolio.timeline}
        label={portfolio.theme.sceneLabels.pilgrimageAscent}
      />

      <BambooCloudDivider label={portfolio.theme.sectionDividers.contact} />
      <SealedMessageContact
        section={portfolio.sections.contact}
        links={portfolio.contact.links}
        socials={portfolio.contact.socials}
        label={portfolio.theme.contactChannelLabel}
        title={portfolio.contact.formTitle}
        description={portfolio.contact.formDescription}
      >
        <form onSubmit={handleSubmit} className="sealed-form">
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
          <button className="jade-seal-button form-submit" type="submit" disabled={formState.status === "sending"}>
            <span aria-hidden="true" />
            {formState.status === "sending" ? "Sending..." : "Send message"}
          </button>
          {formState.message ? (
            <p className={formState.status === "error" ? "form-message error" : "form-message"}>
              {formState.message}
            </p>
          ) : null}
        </form>
      </SealedMessageContact>
    </main>
  );
}
