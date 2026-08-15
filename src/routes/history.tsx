import { createFileRoute } from "@tanstack/react-router";
import { CallHistory } from "@/components/fraud/CallHistory";
import { callHistory } from "@/lib/fraud/mock-data";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Call History — FraudGuard AI" },
      {
        name: "description",
        content: "Review every analyzed call with its risk score and fraud verdict.",
      },
      { property: "og:title", content: "Call History — FraudGuard AI" },
      {
        property: "og:description",
        content: "Review every analyzed call with its risk score and fraud verdict.",
      },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <CallHistory items={callHistory} title="Call History" />
    </div>
  );
}
