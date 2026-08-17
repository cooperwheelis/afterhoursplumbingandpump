export type FaqItem = { question: string; answer: string };

export function Faq({ items, heading = "Common questions" }: { items: FaqItem[]; heading?: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
      <dl className="mt-6 divide-y divide-border rounded-md border border-border">
        {items.map((item) => (
          <div key={item.question} className="py-5">
            <dt className="text-lg font-semibold text-navy">{item.question}</dt>
            <dd className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
