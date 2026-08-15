interface Props {
  score: number;
  danger: boolean;
}

export function RiskScore({ score, danger }: Props) {
  const pad = String(score).padStart(2, "0");
  const size = 220;
  const r = 96;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(score, 100) / 100) * c;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={12}
          className="stroke-border"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={12}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className={danger ? "stroke-danger" : "stroke-safe"}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1)" }}
        />
      </svg>
      <div className="absolute text-center">
        <p
          className={`font-display text-5xl font-extrabold sm:text-6xl ${danger ? "text-danger" : "text-safe"}`}
        >
          {pad}
        </p>
        <p className="text-sm text-muted-foreground">/ 100</p>
      </div>
    </div>
  );
}
