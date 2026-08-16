import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { AREA_LINKS, EMAIL, MAILING_ADDRESS, PHONE_DISPLAY, PHONE_HREF, SERVICE_LINKS, SOCIAL_LINKS } from "@/data/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo tone="light" />
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={PHONE_HREF} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-amber">
                <Phone aria-hidden="true" className="size-4 shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-navy-foreground/80">24/7 Emergency Service</li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-start gap-2 break-all hover:text-amber">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2 text-navy-foreground/80">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {MAILING_ADDRESS}
            </li>
          </ul>
        </div>

        <nav aria-label="Services">
          <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {SERVICE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-flex min-h-9 items-center hover:text-amber hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas">
          <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {AREA_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-flex min-h-9 items-center hover:text-amber hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>
              <Link to="/about" className="inline-flex min-h-9 items-center hover:text-amber hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="inline-flex min-h-9 items-center hover:text-amber hover:underline">
                Contact
              </Link>
            </li>
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center hover:text-amber hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page py-5 text-xs text-navy-foreground/70">
          © {new Date().getFullYear()} After Hours Plumbing and Pump Service. Licensed and insured. Hillsborough, NC.
        </div>
      </div>
    </footer>
  );
}
