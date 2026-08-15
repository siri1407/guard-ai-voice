import type { TranscriptLine } from "@/lib/fraud/types";

export function Transcript({ lines }: { lines: TranscriptLine[] }) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold sm:text-3xl">📝 What the caller said</h2>
      <div className="glass space-y-4 rounded-3xl p-5 sm:p-7">
        {lines.map((line, i) => (
          <div key={i} className="space-y-1">
            <p className="text-xs font-bold tracking-widest text-muted-foreground">
              {line.speaker}:
            </p>
            <p
              className={`rounded-2xl px-4 py-3 text-lg leading-relaxed ${
                line.flag === "danger"
                  ? "bg-danger/15 text-danger ring-1 ring-danger/40"
                  : line.flag === "warning"
                    ? "bg-warning/15 text-warning ring-1 ring-warning/30"
                    : "bg-secondary/60"
              }`}
            >
              “{line.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
