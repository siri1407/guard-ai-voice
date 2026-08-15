import type { CallHistoryItem } from "@/lib/fraud/types";

/** Lightweight SVG sparkline of recent call risk scores. */
export function RiskTrend({ items }: { items: CallHistoryItem[] }) {
  const data = [...items].reverse().map((i) => i.risk_score);
  if (data.length < 2) return null;

  const w = 100;
  const h = 34;
  const max = 100;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - (v / max) * h;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const avg = Math.round(data.reduce((a, b) => a + b, 0) / data.length);

  return (
    <section className="glass animate-rise rounded-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold">Risk Trend</h2>
          <p className="text-sm text-muted-foreground">
            Average risk across your last {data.length} calls
          </p>
        </div>
        <p className="font-display text-4xl font-extrabold">{avg}</p>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="mt-6 h-28 w-full"
        role="img"
        aria-label={`Risk trend, average ${avg} out of 100`}
      >
        <polyline
          points={`0,${h} ${points.join(" ")} ${w},${h}`}
          className="fill-primary/15 stroke-none"
        />
        <polyline
          points={points.join(" ")}
          className="fill-none stroke-primary"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}
