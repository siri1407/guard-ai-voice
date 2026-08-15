/**
 * Service layer placeholder.
 *
 * Today every call returns mock data. Later, swap the bodies of these
 * functions for real requests to the Python backend, e.g.
 *
 *   const form = new FormData();
 *   form.append("file", file);
 *   const res = await fetch(`${API_BASE_URL}/analyze`, { method: "POST", body: form });
 *   return (await res.json()) as AnalysisResult;
 *
 * The AnalysisResult type already mirrors the planned API payload:
 * { transcript, prediction, scam_probability, risk_score, risk_level,
 *   detected_indicators, explanation, safety_actions }
 */
import { callHistory, safeResult, scamResult } from "./mock-data";
import type { AnalysisResult, CallHistoryItem } from "./types";

export const API_BASE_URL = "/api"; // replaced with the Python backend URL later

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export type DemoKind = "scam" | "safe";

export async function analyzeCall(input: {
  file?: File | null;
  demo?: DemoKind;
}): Promise<AnalysisResult> {
  await delay(300);
  if (input.demo === "safe") return { ...safeResult };
  if (input.demo === "scam") return { ...scamResult };
  // Mock: real uploads currently resolve to the scam sample.
  return { ...scamResult, label: input.file?.name ?? scamResult.label };
}

export async function getCallHistory(): Promise<CallHistoryItem[]> {
  await delay(150);
  return callHistory;
}
