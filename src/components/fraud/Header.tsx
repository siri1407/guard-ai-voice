import { Link } from "@tanstack/react-router";
import { AudioWaveform, ShieldCheck } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/analyze", label: "Analyze Call" },
  { to: "/history", label: "Call History" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="relative grid size-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
            <ShieldCheck className="size-5" />
            <AudioWaveform className="absolute -bottom-1 -right-1 size-4 rounded-md bg-background p-0.5 text-primary" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold">FraudGuard AI</span>
            <span className="block text-xs text-muted-foreground">AI Voice Fraud Detector</span>
          </span>
        </Link>

        <nav className="order-3 flex w-full gap-1 overflow-x-auto sm:order-none sm:w-auto">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 rounded-full border border-safe/30 bg-safe/10 px-3 py-1.5 text-xs font-semibold text-safe">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-2 animate-pulse-ring rounded-full bg-safe" />
            <span className="relative inline-flex size-2 rounded-full bg-safe" />
          </span>
          AI Protection Active
        </div>
      </div>
    </header>
  );
}
