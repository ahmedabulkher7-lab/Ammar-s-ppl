import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ahmed Fitness PPL Program" },
      { name: "description", content: "About the Push Pull Legs program: principles, structure, and how to get the most from every session." },
      { property: "og:title", content: "About Ahmed Fitness" },
      { property: "og:description", content: "The principles behind the PPL hypertrophy split." },
    ],
  }),
  component: About,
});

const principles = [
  { t: "Progressive Overload", d: "Add weight, reps, or quality every week. Track it or lose it." },
  { t: "Full Range of Motion", d: "Stretch under load. Squeeze at the peak. Never bounce." },
  { t: "Rest 60–120 seconds", d: "Enough to recover, short enough to keep intensity up." },
  { t: "Recovery is training", d: "Sleep 7–9h, eat in a slight surplus, hydrate, repeat." },
];

function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          About
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold tracking-tight">
          Built for <span className="text-gradient-red">serious lifters</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The Push Pull Legs split is the most efficient hypertrophy framework for intermediate and advanced lifters.
          Each muscle group gets two high-quality sessions per week — enough volume to grow, enough recovery to keep coming back stronger.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {principles.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-bold">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8">
        <h2 className="font-display text-2xl font-bold">Weekly Schedule</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-7 gap-2 text-center text-sm">
          {[
            ["Mon", "Rest"], ["Tue", "Rest"], ["Wed", "Pull"],
            ["Thu", "Legs"], ["Fri", "Rest"], ["Sat", "Rest"], ["Sun", "Push"],
          ].map(([day, w]) => (
            <div key={day} className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{day}</div>
              <div className={`mt-1 font-display font-bold ${w === "Rest" ? "text-muted-foreground" : "text-primary"}`}>{w}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
