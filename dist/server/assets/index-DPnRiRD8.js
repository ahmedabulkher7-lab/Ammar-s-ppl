import { H as jsxRuntimeExports, P as reactExports } from "./server-CugNUnIB.js";
import { c as createLucideIcon, m as motion, L as Link } from "./router-AyEByZNQ.js";
import { P as Play } from "./play-zqqd1u-G.js";
import { C as CircleCheck } from "./circle-check-ObJcKtMQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$a = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$a);
const __iconNode$9 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
];
const Droplet = createLucideIcon("droplet", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$7);
const __iconNode$6 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$6);
const __iconNode$5 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
];
const Pause = createLucideIcon("pause", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$3);
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$2);
const __iconNode$1 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const heroImg = "/assets/hero-gym-DamizKfp.jpg";
function Card({ icon: Icon, title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "rounded-2xl border border-border bg-card p-6 shadow-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/15 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold tracking-wide", children: title })
        ] }),
        children
      ]
    }
  );
}
const inputCls = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary transition-colors";
function BMI() {
  const [h, setH] = reactExports.useState(175);
  const [w, setW] = reactExports.useState(70);
  const bmi = reactExports.useMemo(() => +(w / Math.pow(h / 100, 2)).toFixed(1), [h, w]);
  const cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Calculator, title: "BMI Calculator", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Height (cm)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputCls, value: h, onChange: (e) => setH(+e.target.value || 0) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Weight (kg)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputCls, value: w, onChange: (e) => setW(+e.target.value || 0) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-gradient-red p-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-primary-foreground", children: isFinite(bmi) ? bmi : "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary-foreground/80", children: cat })
    ] })
  ] }) });
}
function WorkoutTimer() {
  const [sec, setSec] = reactExports.useState(0);
  const [running, setRunning] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (running) {
      ref.current = window.setInterval(() => setSec((s2) => s2 + 1), 1e3);
    }
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running]);
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Timer, title: "Workout Timer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-6xl font-bold tracking-wider tabular-nums", children: [
      m,
      ":",
      s
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setRunning(!running), className: "flex items-center gap-2 rounded-lg bg-gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red transition-transform hover:scale-105", children: [
        running ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
        running ? "Pause" : "Start"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setSec(0);
        setRunning(false);
      }, className: "flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
        " Reset"
      ] })
    ] })
  ] }) });
}
const DAYS = ["Push", "Pull", "Legs"];
function ProgressTracker() {
  const [done, setDone] = reactExports.useState(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem("ppl-progress") || "{}");
    } catch {
      return {};
    }
  });
  reactExports.useEffect(() => {
    localStorage.setItem("ppl-progress", JSON.stringify(done));
  }, [done]);
  const count = Object.values(done).filter(Boolean).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: CircleCheck, title: "Progress Tracker", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 cursor-pointer hover:border-primary/50 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
        d,
        " Day"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: !!done[d], onChange: (e) => setDone({ ...done, [d]: e.target.checked }), className: "h-5 w-5 accent-primary" })
    ] }, d)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-lg", children: count }),
      " / ",
      DAYS.length,
      " completed this week"
    ] })
  ] }) });
}
function WaterTracker() {
  const [cups, setCups] = reactExports.useState(0);
  const goal = 8;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Droplet, title: "Water Intake", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-5xl font-bold", children: [
      cups,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-2xl", children: [
        " / ",
        goal
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-8 gap-1.5", children: Array.from({ length: goal }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 rounded ${i < cups ? "bg-primary" : "bg-surface-2"} transition-colors` }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCups(Math.max(0, cups - 1)), className: "rounded-lg border border-border bg-surface p-2 hover:bg-surface-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCups(Math.min(goal, cups + 1)), className: "rounded-lg bg-gradient-red p-2 text-primary-foreground shadow-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
function CalorieCalc() {
  const [age, setAge] = reactExports.useState(25);
  const [w, setW] = reactExports.useState(70);
  const [h, setH] = reactExports.useState(175);
  const [sex, setSex] = reactExports.useState("m");
  const [act, setAct] = reactExports.useState(1.55);
  const bmr = sex === "m" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
  const cals = Math.round(bmr * act);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: Flame, title: "Calorie Calculator", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Age" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputCls, value: age, onChange: (e) => setAge(+e.target.value || 0) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Weight (kg)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputCls, value: w, onChange: (e) => setW(+e.target.value || 0) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Height (cm)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputCls, value: h, onChange: (e) => setH(+e.target.value || 0) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Sex" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, value: sex, onChange: (e) => setSex(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "m", children: "Male" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "f", children: "Female" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, value: act, onChange: (e) => setAct(+e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1.2, children: "Sedentary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1.375, children: "Light" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1.55, children: "Moderate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1.725, children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1.9, children: "Very Active" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-gradient-red p-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-primary-foreground", children: cals }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary-foreground/80", children: "kcal / day" })
    ] })
  ] });
}
function Tools() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "tools", className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary", children: "Toolkit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight", children: [
        "Train smart, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "track everything" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Built-in tools to plan, measure, and progress every session." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BMI, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorkoutTimer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressTracker, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WaterTracker, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalorieCalc, {})
    ] })
  ] });
}
const days = [{
  to: "/push",
  title: "Push Day",
  desc: "Chest, shoulders, triceps",
  color: "from-red-600 to-orange-500"
}, {
  to: "/pull",
  title: "Pull Day",
  desc: "Back, rear delts, biceps",
  color: "from-red-700 to-rose-500"
}, {
  to: "/legs",
  title: "Legs Day",
  desc: "Quads, hamstrings, calves",
  color: "from-rose-600 to-red-500"
}];
const stats = [{
  icon: Flame,
  label: "Exercises",
  value: "21"
}, {
  icon: Target,
  label: "Training Days",
  value: "3"
}, {
  icon: TrendingUp,
  label: "Weekly Volume",
  value: "78 sets"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", width: 1920, height: 1080, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "var(--gradient-hero)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-32 sm:py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]", children: [
          "PPL ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "WORKOUT" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "PROGRAM"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg sm:text-xl text-muted-foreground", children: "Optimized hypertrophy training split. Build muscle, gain strength, track everything." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/push", className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-red px-7 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-red transition-transform hover:scale-105", children: [
            "Start Training",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#tools", className: "inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-7 py-4 text-base font-bold uppercase tracking-wider backdrop-blur transition-colors hover:bg-surface", children: "Explore Tools" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-3 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-8 w-8 text-primary mx-auto sm:mx-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl font-bold", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: s.label })
      ] })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary", children: "The Split" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight", children: [
          "Three days, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "infinite gains" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: days.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: d.to, className: "group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${d.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-sm uppercase tracking-widest text-primary", children: [
            "Day ",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-3xl font-bold", children: d.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: d.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary", children: [
            "View workout ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] })
        ] })
      ] }) }, d.to)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tools, {})
  ] });
}
export {
  Index as component
};
