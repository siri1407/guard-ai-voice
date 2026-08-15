export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type Severity = "LOW" | "MEDIUM" | "HIGH";

export interface ThreatIndicator {
  id: string;
  icon: string;
  name: string;
  description: string;
  severity: Severity;
}

export interface TranscriptLine {
  speaker: "CALLER" | "YOU";
  text: string;
  /** highlight level for suspicious phrases */
  flag?: "warning" | "danger";
}

export interface SafetyAction {
  icon: string;
  title: string;
}

/** Shape mirrors the future Python API response. */
export interface AnalysisResult {
  id: string;
  label: string;
  transcript: TranscriptLine[];
  prediction: "FRAUD" | "SAFE";
  scam_probability: number; // 0-1 ML confidence for the predicted class
  risk_score: number; // 0-100
  risk_level: RiskLevel;
  detected_indicators: ThreatIndicator[];
  explanation: string;
  safety_actions: SafetyAction[];
  headline_warning?: string;
  created_at: string;
}

export interface CallHistoryItem {
  id: string;
  label: string;
  risk_score: number;
  prediction: "FRAUD" | "SAFE";
  when: string;
}
