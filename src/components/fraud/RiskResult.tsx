import type { AnalysisResult } from "@/lib/fraud/types";
import { RiskScore } from "./RiskScore";

export function RiskResult({ result }: { result: AnalysisResult }) {
  const danger = result.prediction === "FRAUD";

  return (
    <section
      className="animate-rise relative overflow-hidden rounded-3xl border p-6 sm:p-10"
      style={{
        borderColor: "transparent",
        backgroundImage: danger ? "var(--gradient-danger)" : "var(--gradient-safe)",
        backgroundColor: "color-mix(in oklab, var(--surface) 80%, transparent)",
        boxShadow: danger ? "var(--shadow-danger)" : "var(--shadow-safe)",
      }}
    >
      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="space-y-4">
          <p
            className={`font-display text-3xl font-extrabold leading-tight sm:text-5xl ${danger ? "text-danger" : "text-safe"}`}
          >
            {danger ? "🚨 FRAUD DETECTED" : "✅ NO FRAUD DETECTED"}
          </p>
          <p
            className={`inline-flex rounded-full px-4 py-1.5 text-sm font-bold tracking-widest ${
              danger ? "bg-danger/20 text-danger" : "bg-safe/20 text-safe"
            }`}
          >
            {result.risk_level} RISK
          </p>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            {danger
              ? "This call matches known voice-scam behaviour. Act carefully."
              : "This conversation does not contain strong fraud indicators."}
          </p>
        </div>

        <RiskScore score={result.risk_score} danger={danger} />
      </div>

      {result.headline_warning && (
        <div className="mt-8 rounded-2xl bg-danger/15 px-5 py-5 text-center ring-1 ring-danger/40">
          <p className="font-display text-2xl font-extrabold text-danger sm:text-3xl">
            {result.headline_warning}
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-2xl p-5 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">ML Confidence</p>
          <p className="mt-1 font-display text-3xl font-bold">
            {Math.round(result.scam_probability * 100)}%
          </p>
        </div>
        <div className="glass rounded-2xl p-5 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">Threat Signals</p>
          <p className="mt-1 font-display text-3xl font-bold">
            {result.detected_indicators.length}
          </p>
        </div>
      </div>
    </section>
  );
}
