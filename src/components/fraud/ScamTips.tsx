const tips = [
  { icon: "🔐", title: "Never share an OTP", body: "No bank, courier or officer will ever ask for a one-time password." },
  { icon: "⏱️", title: "Urgency is a weapon", body: "“Act now or your account closes” is a pressure tactic, not a policy." },
  { icon: "📞", title: "Hang up and call back", body: "Dial the number printed on your card or the official website, never the one they give." },
  { icon: "💳", title: "No one needs remote access", body: "Refunds never require installing an app or screen-sharing your banking." },
];

export function ScamTips() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold sm:text-3xl">🛡️ Stay one step ahead</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((t, i) => (
          <article
            key={t.title}
            className="glass animate-rise rounded-2xl p-5 transition-transform hover:-translate-y-1"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <p className="text-3xl">{t.icon}</p>
            <p className="mt-3 font-display text-lg font-bold leading-snug">{t.title}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{t.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
