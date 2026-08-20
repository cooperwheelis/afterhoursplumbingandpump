import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AREA_LINKS, PHONE_DISPLAY, PHONE_HREF, SERVICE_LINKS } from "@/data/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navLinkClass =
  "inline-flex min-h-11 items-center px-1 text-[15px] font-semibold text-navy transition-colors hover:text-blue";

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; to: string }[];
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(navLinkClass, "gap-1")}
      >
        {label}
        <ChevronDown aria-hidden="true" className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 z-50 w-72 rounded-md border border-border bg-surface shadow-sm transition-opacity duration-150",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="py-1">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted hover:text-blue"
                activeProps={{ className: "block px-4 py-2.5 text-sm font-semibold text-blue bg-muted" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div className="bg-navy-deep text-navy-foreground">
        <div className="container-page py-2 text-center text-[12px] font-medium tracking-wide sm:text-[13px]">
          24/7 Emergency Plumbing • No Overtime or Weekend Premiums
        </div>
      </div>

      <div
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-surface",
          scrolled && "shadow-[0_1px_10px_rgba(15,35,64,0.10)]",
        )}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            <DesktopDropdown label="Services" items={SERVICE_LINKS} />
            <DesktopDropdown label="Service Areas" items={AREA_LINKS} />
            <Link to="/reviews" className={navLinkClass} activeProps={{ className: cn(navLinkClass, "text-blue underline underline-offset-8") }}>
              Reviews
            </Link>
            <Link to="/about" className={navLinkClass} activeProps={{ className: cn(navLinkClass, "text-blue underline underline-offset-8") }}>
              About
            </Link>
            <Link to="/contact" className={navLinkClass} activeProps={{ className: cn(navLinkClass, "text-blue underline underline-offset-8") }}>
              Contact
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-[15px] font-bold text-amber-foreground transition-colors hover:bg-amber-hover"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call 24/7
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-amber px-4 py-2 text-sm font-bold text-amber-foreground"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call 24/7
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-md border border-input text-navy"
            >
              {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
            <nav aria-label="Mobile" className="container-page py-4">
              <MobileGroup title="Services" items={SERVICE_LINKS} onNavigate={() => setMobileOpen(false)} />
              <MobileGroup title="Service Areas" items={AREA_LINKS} onNavigate={() => setMobileOpen(false)} />
              <Link
                to="/reviews"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center border-b border-border font-semibold text-navy"
              >
                Reviews
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center border-b border-border font-semibold text-navy"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center border-b border-border font-semibold text-navy"
              >
                Contact
              </Link>
              <a
                href={PHONE_HREF}
                className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-4 font-bold text-amber-foreground"
              >
                <Phone aria-hidden="true" className="size-5" />
                Call {PHONE_DISPLAY}
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: readonly { label: string; to: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-12 w-full items-center justify-between font-semibold text-navy"
      >
        {title}
        <ChevronDown aria-hidden="true" className={cn("size-5 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <ul className="pb-2">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onNavigate}
                className="flex min-h-11 items-center pl-3 text-[15px] text-muted-foreground hover:text-blue"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
