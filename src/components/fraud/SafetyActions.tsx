import type { SafetyAction } from "@/lib/fraud/types";

export function SafetyActions({ actions, danger }: { actions: SafetyAction[]; danger: boolean }) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold sm:text-3xl">
        {danger ? "🛑 What you should do" : "✅ Stay protected"}
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {actions.map((a, i) => (
          <article
            key={a.title}
            className={`animate-rise rounded-3xl p-6 text-center ring-1 ${
              danger ? "bg-danger/10 ring-danger/30" : "bg-safe/10 ring-safe/30"
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="text-4xl">{a.icon}</p>
            <p className="mt-4 font-display text-xl font-bold leading-snug">{a.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
