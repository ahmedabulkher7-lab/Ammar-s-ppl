import { P as reactExports, H as jsxRuntimeExports } from "./server-CugNUnIB.js";
import { c as createLucideIcon, m as motion } from "./router-AyEByZNQ.js";
import { P as Play } from "./play-zqqd1u-G.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$1);
const __iconNode = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
];
const Repeat = createLucideIcon("repeat", __iconNode);
const diffColor = {
  Beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Advanced: "bg-primary/15 text-primary border-primary/30"
};
function ExerciseCard({ exercise, index }) {
  const [playing, setPlaying] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: index * 0.05 },
      className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video overflow-hidden bg-surface-2", children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            className: "h-full w-full",
            src: `https://www.youtube.com/embed/${exercise.youtubeId}?autoplay=1`,
            title: exercise.name,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: exercise.image,
              alt: exercise.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setPlaying(true),
              "aria-label": `Play ${exercise.name} tutorial`,
              className: "absolute inset-0 flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-red shadow-red transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 fill-primary-foreground text-primary-foreground translate-x-0.5" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute top-3 right-3 rounded-full border px-3 py-1 text-xs font-semibold ${diffColor[exercise.difficulty]}`,
              children: exercise.difficulty
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold tracking-wide", children: exercise.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: exercise.sets }),
              " sets"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "h-4 w-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: exercise.reps }),
              " reps"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function WorkoutDayPage({
  title,
  tag,
  description,
  exercises
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary", children: tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl sm:text-6xl font-bold tracking-tight", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: description })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: exercises.map((ex, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExerciseCard, { exercise: ex, index: i }, ex.name)) })
  ] });
}
const img = (q) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=70`;
const pushDay = [
  { name: "Incline Dumbbell Press", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "8iPEnn-ltC8", image: img("photo-1581009146145-b5ef050c2e1e") },
  { name: "Chest Press", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "xUm0BiZCWlQ", image: img("photo-1571019613454-1cb2f99b2d8b") },
  { name: "Shoulder Press", sets: 3, reps: "8–10", difficulty: "Intermediate", youtubeId: "qEwKCR5JCog", image: img("photo-1532029837206-abbe2b7620e3") },
  { name: "Chest Flies", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "Z57CtFmRMxA", image: img("photo-1517836357463-d25dfeac3438") },
  { name: "Lateral Raises", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "3VcKaXpzqRo", image: img("photo-1583454110551-21f2fa2afe61") },
  { name: "Tricep Cable Pushdown", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "2-LAMcpzODU", image: img("photo-1530822847156-5df684ec5ee1") },
  { name: "Overhead Tricep Extension", sets: 3, reps: "10–12", difficulty: "Intermediate", youtubeId: "_gsUck-7M74", image: img("photo-1599058917212-d750089bc07e") }
];
const pullDay = [
  { name: "Lat Pulldown", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "CAwf7n6Luuc", image: img("photo-1598971639058-fab3c3109a00") },
  { name: "Seated Row", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "GZbfZ033f74", image: img("photo-1574680096145-d05b474e2155") },
  { name: "Dumbbell Row", sets: 4, reps: "8–10", difficulty: "Advanced", youtubeId: "dFzUjzfih7k", image: img("photo-1534438327276-14e5300c3a48") },
  { name: "Reverse Flies", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "6cHY60y7QRU", image: img("photo-1517344884509-a0c97ec11bcc") },
  { name: "Shrugs", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "g6qbq4Lf1FI", image: img("photo-1581009146145-b5ef050c2e1e") },
  { name: "Hammer Curls", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "TwD-YGVP4Bk", image: img("photo-1581009137042-c552e485697a") },
  { name: "Dumbbell Curls", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "8d2we4UqOSs", image: img("photo-1583500178690-f7fd39c5691d") }
];
const legsDay = [
  { name: "Hack Squat", sets: 4, reps: "8–12", difficulty: "Advanced", youtubeId: "fE5BWPy7uRc", image: img("photo-1434596922112-19c563067271") },
  { name: "Romanian Deadlift", sets: 4, reps: "8–10", difficulty: "Advanced", youtubeId: "JCXUYuzwNrM", image: img("photo-1517836357463-d25dfeac3438") },
  { name: "Leg Press", sets: 4, reps: "10–12", difficulty: "Intermediate", youtubeId: "IZxyjW7MPJQ", image: img("photo-1574680096145-d05b474e2155") },
  { name: "Hamstring Curl", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "1Tq3QdYUuHs", image: img("photo-1571019613454-1cb2f99b2d8b") },
  { name: "Leg Extension", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "YyvSfVjQeL0", image: img("photo-1534438327276-14e5300c3a48") },
  { name: "Adductors", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "MLBm7i341Rw", image: img("photo-1518611012118-696072aa579a") },
  { name: "Calf Raises", sets: 4, reps: "12–15", difficulty: "Beginner", youtubeId: "gwLzBJYoWlI", image: img("photo-1583454110551-21f2fa2afe61") }
];
export {
  WorkoutDayPage as W,
  pushDay as a,
  legsDay as l,
  pullDay as p
};
