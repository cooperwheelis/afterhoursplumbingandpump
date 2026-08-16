import { CallButton } from "./CallButton";

export function FinalCta({
  heading = "Need a plumber now?",
  text = "Our emergency line is available 24 hours a day, seven days a week.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy py-12 text-navy-foreground sm:py-16">
      <div className="container-page flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{heading}</h2>
          <p className="mt-3 text-navy-foreground/85">{text}</p>
        </div>
        <CallButton className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
