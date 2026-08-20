import { CallButton } from "./CallButton";

export function PageHero({
  title,
  image,
  imageAlt,
  showCall = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  showCall?: boolean;
}) {
  return (
    <section className="relative isolate min-h-[240px] overflow-hidden bg-navy sm:min-h-[280px]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/55"
      />
      <div className="container-page relative flex min-h-[240px] flex-col justify-center py-12 sm:min-h-[280px] sm:py-16">
        <div className="max-w-[560px] text-navy-foreground">
          <h1 className="text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h1>
          {showCall ? (
            <div className="mt-6">
              <CallButton />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
