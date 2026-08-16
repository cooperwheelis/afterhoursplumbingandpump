import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "page",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "page" | "white" | "navy" | "muted";
  id?: string;
}) {
  const tones = {
    page: "bg-background text-foreground",
    white: "bg-surface text-foreground",
    muted: "bg-muted text-foreground",
    navy: "bg-navy text-navy-foreground",
  }[tone];

  return (
    <section id={id} className={cn("py-11 sm:py-14 lg:py-20", tones, className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  as: As = "h2",
  className,
}: {
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <As className="text-2xl font-bold sm:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">{title}</As>
      {intro ? <p className="mt-3 text-base leading-relaxed opacity-90">{intro}</p> : null}
    </div>
  );
}
