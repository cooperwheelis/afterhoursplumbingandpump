import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be under 100 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(30, "Phone must be under 30 characters."),
  email: z
    .string()
    .trim()
    .max(255, "Email must be under 255 characters.")
    .email("Please enter a valid email address, or leave this blank.")
    .optional()
    .or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(2000, "Message must be under 2000 characters.").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  "Plumbing repair",
  "Water heater",
  "Well pump",
  "Water quality",
  "Something else",
];

const fieldClass =
  "mt-1.5 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-base text-foreground outline-none focus:border-blue";

export function ContactForm({ heading = "Send a non-emergency message" }: { heading?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: "", phone: "" } });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    const { error } = await supabase.from("contact_submissions").insert({
      name: values.name,
      phone: values.phone,
      email: values.email || null,
      service: values.service || null,
      message: values.message || null,
    });
    if (error) {
      setServerError(`We could not send your message. Please call ${PHONE_DISPLAY} instead.`);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="rounded-md border-l-2 border-blue bg-surface p-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
          <CheckCircle2 aria-hidden="true" className="size-6 text-blue" />
          Message received
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Thanks for reaching out. We will get back to you as soon as we can. If your plumbing problem cannot wait,
          call{" "}
          <a href={PHONE_HREF} className="font-semibold text-blue underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>{" "}
          any time.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border bg-surface p-6">
      <h2 className="text-xl font-bold text-navy">{heading}</h2>
      <p className="mt-3 rounded-md border-l-2 border-amber bg-muted p-3 text-sm font-semibold text-foreground">
        For emergencies, call{" "}
        <a href={PHONE_HREF} className="text-blue underline underline-offset-4">
          {PHONE_DISPLAY}
        </a>{" "}
        for immediate assistance.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 grid gap-4">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={fieldClass}
            {...register("name")}
          />
          {errors.name ? (
            <p id="cf-name-error" className="mt-1 text-sm font-medium text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cf-phone" className="text-sm font-semibold">
            Phone <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "cf-phone-error" : undefined}
            className={fieldClass}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="cf-phone-error" className="mt-1 text-sm font-medium text-destructive">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold">
            Email <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p id="cf-email-error" className="mt-1 text-sm font-medium text-destructive">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cf-service" className="text-sm font-semibold">
            Service needed <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <select id="cf-service" className={fieldClass} {...register("service")}>
            <option value="">Choose one</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cf-message" className="text-sm font-semibold">
            Message <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="cf-message"
            rows={4}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "cf-message-error" : undefined}
            className={fieldClass}
            {...register("message")}
          />
          {errors.message ? (
            <p id="cf-message-error" className="mt-1 text-sm font-medium text-destructive">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        {serverError ? (
          <p role="alert" className="rounded-md border-l-2 border-destructive bg-muted p-3 text-sm font-medium text-destructive">
            {serverError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-navy px-6 font-bold text-navy-foreground transition-colors hover:bg-navy-deep disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
