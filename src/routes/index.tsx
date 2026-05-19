import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Target, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import { Tools } from "@/components/Tools";

export const Route = createFileRoute("/")({
  component: Index,
});

const days = [
  { to: "/push", title: "Push Day", desc: "Chest, shoulders, triceps", color: "from-red-600 to-orange-500" },
  { to: "/pull", title: "Pull Day", desc: "Back, rear delts, biceps", color: "from-red-700 to-rose-500" },
  { to: "/legs", title: "Legs Day", desc: "Quads, hamstrings, calves", color: "from-rose-600 to-red-500" },
] as const;

const stats = [
  { icon: Flame, label: "Exercises", value: "21" },
  { icon: Target, label: "Training Days", value: "3" },
  { icon: TrendingUp, label: "Weekly Volume", value: "78 sets" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-32 sm:py-48">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

            <h1 className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]">
              PPL <br />
              <span className="text-gradient-red">WORKOUT</span> <br />
              PROGRAM
            </h1>
            <p className="mt-6 max-w-xl text-lg sm:text-xl text-muted-foreground">
              Optimized hypertrophy training split. Build muscle, gain strength, track everything.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/push"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-red px-7 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-red transition-transform hover:scale-105"
              >
                Start Training
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#tools"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-7 py-4 text-base font-bold uppercase tracking-wider backdrop-blur transition-colors hover:bg-surface"
              >
                Explore Tools
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left"
            >
              <s.icon className="h-8 w-8 text-primary mx-auto sm:mx-0" />
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DAYS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            The Split
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Three days, <span className="text-gradient-red">infinite gains</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {days.map((d, i) => (
            <motion.div
              key={d.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={d.to}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card hover-lift"
              >
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${d.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
                <div className="relative">
                  <div className="font-display text-sm uppercase tracking-widest text-primary">Day {i + 1}</div>
                  <h3 className="mt-2 font-display text-3xl font-bold">{d.title}</h3>
                  <p className="mt-2 text-muted-foreground">{d.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View workout <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Tools />
    </>
  );
}
