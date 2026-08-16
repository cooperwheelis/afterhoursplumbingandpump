import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-foreground/20 bg-navy lg:hidden">
      <a
        href={PHONE_HREF}
        className="flex min-h-14 items-center justify-center gap-2 bg-amber px-4 text-base font-bold text-amber-foreground"
      >
        <Phone aria-hidden="true" className="size-5" />
        Call 24/7: {PHONE_DISPLAY}
      </a>
    </div>
  );
}
