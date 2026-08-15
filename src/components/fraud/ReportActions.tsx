import { useState } from "react";
import type { AnalysisResult } from "@/lib/fraud/types";

function buildReport(r: AnalysisResult) {
  return [
    `FraudGuard AI — Call Report`,
    `File: ${r.label}`,
    `Verdict: ${r.prediction}`,
    `Risk score: ${r.risk_score}/100 (${r.risk_level} risk)`,
    `ML confidence: ${Math.round(r.scam_probability * 100)}%`,
    ``,
    `Threat signals:`,
    ...r.detected_indicators.map((t) => `  - ${t.name} (${t.severity}): ${t.description}`),
    ``,
    `Transcript:`,
    ...r.transcript.map((l) => `  ${l.speaker}: ${l.text}`),
    ``,
    `Explanation:`,
    r.explanation,
    ``,
    `Recommended actions:`,
    ...r.safety_actions.map((a) => `  - ${a.title}`),
  ].join("\n");
}

export function ReportActions({ result }: { result: AnalysisResult }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(buildReport(result));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([buildReport(result)], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fraudguard-report-${result.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => void copy()}
        className="rounded-xl border border-border bg-secondary/50 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        {copied ? "✅ Copied" : "📋 Copy report"}
      </button>
      <button
        type="button"
        onClick={download}
        className="rounded-xl border border-border bg-secondary/50 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        ⬇️ Download report
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-xl border border-border bg-secondary/50 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
      >
        🖨️ Print
      </button>
    </div>
  );
}
