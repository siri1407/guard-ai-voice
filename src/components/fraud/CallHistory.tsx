import { Link } from "@tanstack/react-router";
import type { CallHistoryItem } from "@/lib/fraud/types";

export function CallHistory({
  items,
  showViewAll = false,
  title = "Recent Calls",
}: {
  items: CallHistoryItem[];
  showViewAll?: boolean;
  title?: string;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {showViewAll && (
          <Link to="/history" className="text-sm font-semibold text-primary hover:underline">
            View All
          </Link>
        )}
      </div>
      <div className="glass divide-y divide-border rounded-3xl">
        {items.map((c) => {
          const fraud = c.prediction === "FRAUD";
          return (
            <div
              key={c.id}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-4 sm:px-7"
            >
              <span className="text-lg">{fraud ? "🔴" : "🟢"}</span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{c.label}</p>
                <p className="text-sm text-muted-foreground">
                  Risk: {String(c.risk_score).padStart(2, "0")}/100
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  fraud ? "bg-danger/15 text-danger" : "bg-safe/15 text-safe"
                }`}
              >
                {fraud ? "Fraud Detected" : "Safe"}
              </span>
              <span className="w-20 text-right text-sm text-muted-foreground">{c.when}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
