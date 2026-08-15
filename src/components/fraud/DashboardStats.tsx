import { dashboardStats } from "@/lib/fraud/mock-data";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {dashboardStats.map((s, i) => (
        <div
          key={s.label}
          className="glass animate-rise rounded-2xl p-5"
          style={{ animationDelay: `${i * 70}ms` }}
        >
          <p className="text-sm text-muted-foreground">{s.label}</p>
          <p className="mt-2 font-display text-3xl font-bold sm:text-4xl">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
