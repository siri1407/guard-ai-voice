import type { ThreatIndicator } from "@/lib/fraud/types";

const severityStyle: Record<string, string> = {
  HIGH: "bg-danger/15 text-danger ring-danger/30",
  MEDIUM: "bg-warning/15 text-warning ring-warning/30",
  LOW: "bg-safe/15 text-safe ring-safe/30",
};

export function ThreatSignals({ indicators }: { indicators: ThreatIndicator[] }) {
  if (indicators.length === 0) return null;

  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold sm:text-3xl">Why did AI flag this?</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {indicators.map((t, i) => (
          <article
            key={t.id}
            className="glass animate-rise flex items-start gap-4 rounded-2xl p-5"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="text-2xl leading-none">{t.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-bold tracking-wide">{t.name}</p>
              <p className="mt-1 text-muted-foreground">{t.description}</p>
              <span
                className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wider ring-1 ${severityStyle[t.severity]}`}
              >
                SEVERITY: {t.severity}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
