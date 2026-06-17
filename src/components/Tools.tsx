import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Timer, CheckCircle2, Droplet, Flame, Play, Pause, RotateCcw, Plus, Minus } from "lucide-react";

function Card({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-card p-6 shadow-card"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-primary/15 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold tracking-wide">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary transition-colors";

function BMI() {
  const [h, setH] = useState(175);
  const [w, setW] = useState(70);
  const bmi = useMemo(() => +(w / Math.pow(h / 100, 2)).toFixed(1), [h, w]);
  const cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  return (
    <Card icon={Calculator} title="BMI Calculator">
      <div className="space-y-3">
        <div>
          <label className="text-xs text-muted-foreground">Height (cm)</label>
          <input type="number" className={inputCls} value={h} onChange={(e) => setH(+e.target.value || 0)} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Weight (kg)</label>
          <input type="number" className={inputCls} value={w} onChange={(e) => setW(+e.target.value || 0)} />
        </div>
        <div className="mt-4 rounded-xl bg-gradient-red p-4 text-center">
          <div className="text-3xl font-display font-bold text-primary-foreground">{isFinite(bmi) ? bmi : "—"}</div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/80">{cat}</div>
        </div>
      </div>
    </Card>
  );
}

function WorkoutTimer() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (running) {
      ref.current = window.setInterval(() => setSec((s) => s + 1), 1000);
    }
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [running]);
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return (
    <Card icon={Timer} title="Workout Timer">
      <div className="text-center">
        <div className="font-display text-6xl font-bold tracking-wider tabular-nums">{m}:{s}</div>
        <div className="mt-5 flex justify-center gap-2">
          <button onClick={() => setRunning(!running)} className="flex items-center gap-2 rounded-lg bg-gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red transition-transform hover:scale-105">
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {running ? "Pause" : "Start"}
          </button>
          <button onClick={() => { setSec(0); setRunning(false); }} className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>
      </div>
    </Card>
  );
}

const DAYS = ["Push 1", "Push 2", "Pull", "Legs"] as const;
function ProgressTracker() {
  const [done, setDone] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(localStorage.getItem("ppl-progress") || "{}"); } catch { return {}; }
  });
  useEffect(() => { localStorage.setItem("ppl-progress", JSON.stringify(done)); }, [done]);
  const count = Object.values(done).filter(Boolean).length;
  return (
    <Card icon={CheckCircle2} title="Progress Tracker">
      <div className="space-y-2">
        {DAYS.map((d) => (
          <label key={d} className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 cursor-pointer hover:border-primary/50 transition-colors">
            <span className="text-sm font-medium">{d} Day</span>
            <input type="checkbox" checked={!!done[d]} onChange={(e) => setDone({ ...done, [d]: e.target.checked })} className="h-5 w-5 accent-primary" />
          </label>
        ))}
        <div className="mt-3 text-center text-sm text-muted-foreground">
          <span className="text-primary font-bold text-lg">{count}</span> / {DAYS.length} completed this week
        </div>
      </div>
    </Card>
  );
}

function WaterTracker() {
  const [cups, setCups] = useState(0);
  const goal = 8;
  return (
    <Card icon={Droplet} title="Water Intake">
      <div className="text-center">
        <div className="font-display text-5xl font-bold">
          {cups}<span className="text-muted-foreground text-2xl"> / {goal}</span>
        </div>
        <div className="mt-3 grid grid-cols-8 gap-1.5">
          {Array.from({ length: goal }).map((_, i) => (
            <div key={i} className={`h-8 rounded ${i < cups ? "bg-primary" : "bg-surface-2"} transition-colors`} />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <button onClick={() => setCups(Math.max(0, cups - 1))} className="rounded-lg border border-border bg-surface p-2 hover:bg-surface-2">
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={() => setCups(Math.min(goal, cups + 1))} className="rounded-lg bg-gradient-red p-2 text-primary-foreground shadow-red">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}

function CalorieCalc() {
  const [age, setAge] = useState(25);
  const [w, setW] = useState(70);
  const [h, setH] = useState(175);
  const [sex, setSex] = useState<"m" | "f">("m");
  const [act, setAct] = useState(1.55);
  const bmr = sex === "m" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
  const cals = Math.round(bmr * act);
  return (
    <Card icon={Flame} title="Calorie Calculator">
      <div className="grid grid-cols-2 gap-3">
        <div><label className="text-xs text-muted-foreground">Age</label><input type="number" className={inputCls} value={age} onChange={(e) => setAge(+e.target.value || 0)} /></div>
        <div><label className="text-xs text-muted-foreground">Weight (kg)</label><input type="number" className={inputCls} value={w} onChange={(e) => setW(+e.target.value || 0)} /></div>
        <div><label className="text-xs text-muted-foreground">Height (cm)</label><input type="number" className={inputCls} value={h} onChange={(e) => setH(+e.target.value || 0)} /></div>
        <div>
          <label className="text-xs text-muted-foreground">Sex</label>
          <select className={inputCls} value={sex} onChange={(e) => setSex(e.target.value as "m" | "f")}>
            <option value="m">Male</option><option value="f">Female</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-xs text-muted-foreground">Activity</label>
          <select className={inputCls} value={act} onChange={(e) => setAct(+e.target.value)}>
            <option value={1.2}>Sedentary</option>
            <option value={1.375}>Light</option>
            <option value={1.55}>Moderate</option>
            <option value={1.725}>Active</option>
            <option value={1.9}>Very Active</option>
          </select>
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-gradient-red p-4 text-center">
        <div className="text-3xl font-display font-bold text-primary-foreground">{cals}</div>
        <div className="text-xs uppercase tracking-widest text-primary-foreground/80">kcal / day</div>
      </div>
    </Card>
  );
}

export function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mb-12">
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Toolkit
        </span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Train smart, <span className="text-gradient-red">track everything</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Built-in tools to plan, measure, and progress every session.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BMI />
        <WorkoutTimer />
        <ProgressTracker />
        <WaterTracker />
        <CalorieCalc />
      </div>
    </section>
  );
}
