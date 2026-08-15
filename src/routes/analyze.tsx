import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AudioUploader } from "@/components/fraud/AudioUploader";
import { AnalysisProgress, ANALYSIS_DURATION } from "@/components/fraud/AnalysisProgress";
import { RiskResult } from "@/components/fraud/RiskResult";
import { ThreatSignals } from "@/components/fraud/ThreatSignals";
import { Transcript } from "@/components/fraud/Transcript";
import { AIExplanation } from "@/components/fraud/AIExplanation";
import { SafetyActions } from "@/components/fraud/SafetyActions";
import { analyzeCall, type DemoKind } from "@/lib/fraud/api";
import type { AnalysisResult } from "@/lib/fraud/types";

type Search = { demo?: DemoKind };

export const Route = createFileRoute("/analyze")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const demo = search["demo"];
    return demo === "scam" || demo === "safe" ? { demo } : {};
  },
  head: () => ({
    meta: [
      { title: "Analyze a Call — FraudGuard AI" },
      {
        name: "description",
        content:
          "Upload a call recording and get an instant fraud verdict, risk score, threat signals and safety actions.",
      },
      { property: "og:title", content: "Analyze a Call — FraudGuard AI" },
      {
        property: "og:description",
        content: "Instant fraud verdict, risk score and safety guidance for any call recording.",
      },
    ],
  }),
  component: AnalyzePage,
});

function AnalyzePage() {
  const { demo } = Route.useSearch();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "analyzing" | "done">("idle");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const run = useCallback(async (input: { file?: File | null; demo?: DemoKind }) => {
    setStatus("analyzing");
    setResult(null);
    const [data] = await Promise.all([
      analyzeCall(input),
      new Promise((r) => setTimeout(r, ANALYSIS_DURATION)),
    ]);
    setResult(data);
    setStatus("done");
  }, []);

  useEffect(() => {
    if (!demo) return;
    void run({ demo });
    void navigate({ to: "/analyze", search: {}, replace: true });
  }, [demo, run, navigate]);

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 sm:py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Analyze Call</h1>
        <p className="text-muted-foreground">
          Upload a recording, or try a demo to see how FraudGuard AI explains a scam.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="button"
            onClick={() => void run({ demo: "scam" })}
            className="rounded-xl border border-danger/40 bg-danger/10 px-5 py-2.5 text-sm font-semibold text-danger transition-colors hover:bg-danger/20"
          >
            🚨 Try Scam Demo
          </button>
          <button
            type="button"
            onClick={() => void run({ demo: "safe" })}
            className="rounded-xl border border-safe/40 bg-safe/10 px-5 py-2.5 text-sm font-semibold text-safe transition-colors hover:bg-safe/20"
          >
            🟢 Try Safe Demo
          </button>
        </div>
      </header>

      <AudioUploader file={file} onFileChange={setFile} />

      <button
        type="button"
        disabled={status === "analyzing"}
        onClick={() => void run({ file })}
        className="w-full rounded-2xl bg-primary px-6 py-5 font-display text-xl font-bold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        🔍 Analyze Call
      </button>

      {status === "analyzing" && <AnalysisProgress key={result?.id ?? "run"} />}

      {status === "done" && result && (
        <div className="space-y-14">
          <RiskResult result={result} />
          <ThreatSignals indicators={result.detected_indicators} />
          <Transcript lines={result.transcript} />
          <AIExplanation text={result.explanation} />
          <SafetyActions
            actions={result.safety_actions}
            danger={result.prediction === "FRAUD"}
          />
        </div>
      )}
    </div>
  );
}
