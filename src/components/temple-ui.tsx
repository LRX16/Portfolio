import type { ReactNode } from "react";
import type { LinkItem } from "@/data/portfolio";

const isExternal = (href: string) => href.startsWith("http");

function classNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export function TempleSectionHeader({
  eyebrow,
  title,
  description,
  align = "start"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "start" | "center";
}) {
  return (
    <div className={classNames("section-header", align === "center" && "centered")}>
      <div className="header-sigil" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
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

export function Seal({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={classNames("seal", className)}>{children}</span>;
}

export function RuneDivider({ label }: { label: string }) {
  return (
    <div className="rune-divider" aria-hidden="true">
      <span />
      <strong>{label}</strong>
      <span />
    </div>
  );
}

export function AncientFrame({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={classNames("ancient-frame", className)}>
      <i aria-hidden="true" />
      <i aria-hidden="true" />
      {children}
    </div>
  );
}
