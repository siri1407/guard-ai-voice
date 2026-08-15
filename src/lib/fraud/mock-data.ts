import type { AnalysisResult, CallHistoryItem } from "./types";

export const scamResult: AnalysisResult = {
  id: "demo-scam",
  label: "Bank KYC Call",
  prediction: "FRAUD",
  scam_probability: 0.94,
  risk_score: 92,
  risk_level: "CRITICAL",
  headline_warning: "🛑 DO NOT SHARE YOUR OTP",
  transcript: [
    { speaker: "CALLER", text: "Hello, I am calling from your bank." },
    { speaker: "CALLER", text: "Your KYC has expired.", flag: "warning" },
    { speaker: "CALLER", text: "Your account will be blocked today.", flag: "warning" },
    { speaker: "CALLER", text: "Please tell me the OTP you received.", flag: "danger" },
  ],
  detected_indicators: [
    {
      id: "otp",
      icon: "🔴",
      name: "OTP REQUEST",
      description: "Caller asked for your OTP",
      severity: "HIGH",
    },
    {
      id: "account-threat",
      icon: "🔴",
      name: "ACCOUNT THREAT",
      description: "Caller threatened to block the account",
      severity: "HIGH",
    },
    {
      id: "urgency",
      icon: "🟠",
      name: "URGENCY",
      description: "Caller pressured the user to act immediately",
      severity: "MEDIUM",
    },
    {
      id: "impersonation",
      icon: "🟠",
      name: "BANK IMPERSONATION",
      description: "Caller claimed to represent a bank",
      severity: "MEDIUM",
    },
  ],
  explanation:
    "This call shows multiple scam indicators. The caller appears to impersonate a bank representative, creates urgency by threatening account suspension, and requests an OTP.",
  safety_actions: [
    { icon: "🔒", title: "Do NOT share OTP or PIN" },
    { icon: "📵", title: "End the call" },
    { icon: "🏦", title: "Contact your bank using its official number" },
  ],
  created_at: "Today",
};

export const safeResult: AnalysisResult = {
  id: "demo-safe",
  label: "Delivery Call",
  prediction: "SAFE",
  scam_probability: 0.03,
  risk_score: 8,
  risk_level: "LOW",
  transcript: [
    { speaker: "CALLER", text: "Your order has been shipped and will arrive tomorrow." },
  ],
  detected_indicators: [],
  explanation: "This conversation does not contain strong fraud indicators.",
  safety_actions: [
    { icon: "✅", title: "No action needed" },
    { icon: "🧠", title: "Stay alert if the caller asks for codes later" },
    { icon: "🏦", title: "Never share OTP or PIN with any caller" },
  ],
  created_at: "Today",
};

export const callHistory: CallHistoryItem[] = [
  { id: "1", label: "Bank KYC Call", risk_score: 92, prediction: "FRAUD", when: "Today" },
  { id: "2", label: "UPI Refund Call", risk_score: 86, prediction: "FRAUD", when: "Yesterday" },
  { id: "3", label: "Delivery Call", risk_score: 8, prediction: "SAFE", when: "Yesterday" },
  { id: "4", label: "Lottery Prize Call", risk_score: 78, prediction: "FRAUD", when: "2 days ago" },
  { id: "5", label: "Doctor Appointment", risk_score: 5, prediction: "SAFE", when: "3 days ago" },
];

export const dashboardStats = [
  { label: "Calls Analyzed", value: "24" },
  { label: "Frauds Detected", value: "9" },
  { label: "Average Risk", value: "67%" },
  { label: "Protection", value: "Active" },
];
