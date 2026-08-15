import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardStats } from "@/components/fraud/DashboardStats";
import { CallHistory } from "@/components/fraud/CallHistory";
import { callHistory } from "@/lib/fraud/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FraudGuard AI — Detect Voice Scam Calls with AI" },
      {
        name: "description",
        content:
          "Upload a call recording and let FraudGuard AI detect scam behaviour, risk score and safety actions in seconds.",
      },
      { property: "og:title", content: "FraudGuard AI — AI Voice Fraud Detector" },
      {
        property: "og:description",
        content: "Know when a call is trying to scam you. AI-powered voice fraud detection.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="bg-hero">
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-20">
        <section className="animate-rise text-center">
          <p className="inline-flex rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
            Your AI-powered second brain against voice fraud.
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Know when a call is trying to scam you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Upload a call recording and let AI detect suspicious behavior before it's too late.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/analyze"
              className="rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Analyze a Call
            </Link>
            <Link
              to="/analyze"
              search={{ demo: "scam" }}
              className="rounded-xl border border-danger/40 bg-danger/10 px-6 py-3.5 text-base font-semibold text-danger transition-colors hover:bg-danger/20"
            >
              🚨 Try Scam Demo
            </Link>
            <Link
              to="/analyze"
              search={{ demo: "safe" }}
              className="rounded-xl border border-safe/40 bg-safe/10 px-6 py-3.5 text-base font-semibold text-safe transition-colors hover:bg-safe/20"
            >
              🟢 Try Safe Demo
            </Link>
          </div>
        </section>

        <DashboardStats />

        <CallHistory items={callHistory.slice(0, 3)} showViewAll />
      </div>
    </div>
  );
}
