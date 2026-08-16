import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <div className="container-page">
        <ol className="flex flex-wrap items-center gap-1 py-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-1">
            <Link to="/" className="hover:text-blue hover:underline">
              Home
            </Link>
            <ChevronRight aria-hidden="true" className="size-4 opacity-60" />
          </li>
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1">
              {item.to ? (
                <Link to={item.to} className="hover:text-blue hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
              {i < items.length - 1 ? <ChevronRight aria-hidden="true" className="size-4 opacity-60" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
