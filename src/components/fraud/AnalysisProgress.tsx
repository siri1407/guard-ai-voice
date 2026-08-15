import { useEffect, useState } from "react";
import { Waveform } from "./Waveform";

const steps = [
  "🎙️ Transcribing call...",
  "🤖 Analyzing conversation...",
  "🛡️ Checking fraud signals...",
  "🧠 Preparing safety explanation...",
];

export const ANALYSIS_DURATION = steps.length * 900;

export function AnalysisProgress() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => Math.min(a + 1, steps.length - 1)), 900);
    return () => clearInterval(id);
  }, []);

  const pct = ((active + 1) / steps.length) * 100;

  return (
    <section className="glass animate-rise rounded-3xl p-6 sm:p-10">
      <h2 className="text-center font-display text-2xl font-bold">Analyzing your call</h2>
      <Waveform />
      <div className="mx-auto mt-6 h-2 w-full max-w-xl overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ul className="mx-auto mt-8 max-w-xl space-y-3">
        {steps.map((s, i) => (
          <li
            key={s}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base transition-all ${
              i < active
                ? "bg-safe/10 text-safe"
                : i === active
                  ? "bg-primary/15 text-foreground"
                  : "text-muted-foreground"
            }`}
          >
            <span
              className={`size-2 rounded-full ${
                i < active ? "bg-safe" : i === active ? "animate-pulse bg-primary" : "bg-border"
              }`}
            />
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
