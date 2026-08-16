import { Link } from "@tanstack/react-router";
import { CITIES } from "@/data/site";

export function ServiceAreaNote() {
  return (
    <div className="border-l-2 border-blue bg-surface p-6">
      <h2 className="text-xl font-bold text-navy">Where we work</h2>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        We are based in Hillsborough and work throughout Durham and the surrounding Triangle area:{" "}
        {CITIES.map((c) => c.name).join(", ")}.
      </p>
      <Link
        to="/service-areas"
        className="mt-3 inline-flex min-h-11 items-center font-semibold text-blue underline underline-offset-4 hover:text-navy"
      >
        See all service areas
      </Link>
    </div>
  );
}
