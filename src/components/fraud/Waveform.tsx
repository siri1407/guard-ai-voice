const BARS = 48;

/** Decorative animated voice waveform shown while a call is being analyzed. */
export function Waveform({ danger = false }: { danger?: boolean }) {
  return (
    <div className="flex h-20 items-center justify-center gap-1" aria-hidden>
      {Array.from({ length: BARS }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 rounded-full ${danger ? "bg-danger" : "bg-primary"}`}
          style={{
            height: `${20 + Math.abs(Math.sin(i * 0.7)) * 60}%`,
            opacity: 0.35 + Math.abs(Math.cos(i * 0.5)) * 0.65,
            animation: `wave 1.1s ease-in-out ${(i % 12) * 0.08}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
