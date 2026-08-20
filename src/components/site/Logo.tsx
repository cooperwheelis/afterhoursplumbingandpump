import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoDark from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

export function Logo({ tone = "navy", className }: { tone?: "navy" | "light"; className?: string }) {
  return (
    <Link
      to="/"
      className={cn("flex min-w-0 items-center", className)}
      aria-label="After Hours Plumbing and Pump Service — home"
    >
      <img
        src={tone === "light" ? logoLight : logoDark}
        alt="After Hours Plumbing and Pump Service"
        className="h-11 w-auto sm:h-12 lg:h-14"
        width={1050}
        height={420}
      />
    </Link>
  );
}
