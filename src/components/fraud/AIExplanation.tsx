export function AIExplanation({ text }: { text: string }) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold sm:text-3xl">🤖 Why this call is suspicious</h2>
      <div className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">{text}</p>
      </div>
    </section>
  );
}
