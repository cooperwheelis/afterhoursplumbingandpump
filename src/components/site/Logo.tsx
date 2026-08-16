import { Link } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ tone = "navy", className }: { tone?: "navy" | "light"; className?: string }) {
  const color = tone === "light" ? "text-navy-foreground" : "text-navy";
  return (
    <Link
      to="/"
      className={cn("flex min-w-0 items-center gap-2.5", color, className)}
      aria-label="After Hours Plumbing and Pump Service — home"
    >
      <span className="grid size-9 shrink-0 place-items-center bg-blue text-navy-foreground">
        <Droplets aria-hidden="true" className="size-5" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block font-display text-[15px] font-extrabold tracking-tight uppercase sm:text-base">
          After Hours
        </span>
        <span className={cn("block text-[10px] font-medium tracking-[0.14em] uppercase", tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground")}>
          Plumbing &amp; Pump Service
        </span>
      </span>
    </Link>
  );
}
