import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  variant?: "amber" | "outline" | "navy";
  size?: "md" | "lg";
  className?: string;
};

export function CallButton({ label, variant = "amber", size = "lg", className }: Props) {
  const styles = {
    amber: "bg-amber text-amber-foreground hover:bg-amber-hover",
    navy: "bg-navy text-navy-foreground hover:bg-navy-deep",
    outline: "border border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground/10",
  }[variant];

  return (
    <a
      href={PHONE_HREF}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-none font-semibold transition-colors",
        size === "lg" ? "px-6 py-3.5 text-base sm:text-lg" : "px-4 py-2.5 text-sm",
        styles,
        className,
      )}
    >
      <Phone aria-hidden="true" className="size-5 shrink-0" />
      <span>{label ?? `Call ${PHONE_DISPLAY}`}</span>
    </a>
  );
}
