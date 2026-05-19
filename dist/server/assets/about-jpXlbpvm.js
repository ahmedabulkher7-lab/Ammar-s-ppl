import { H as jsxRuntimeExports } from "./server-CugNUnIB.js";
import { m as motion } from "./router-AyEByZNQ.js";
import { C as CircleCheck } from "./circle-check-ObJcKtMQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const principles = [{
  t: "Progressive Overload",
  d: "Add weight, reps, or quality every week. Track it or lose it."
}, {
  t: "Full Range of Motion",
  d: "Stretch under load. Squeeze at the peak. Never bounce."
}, {
  t: "Rest 60–120 seconds",
  d: "Enough to recover, short enough to keep intensity up."
}, {
  t: "Recovery is training",
  d: "Sleep 7–9h, eat in a slight surplus, hydrate, repeat."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-5xl sm:text-6xl font-bold tracking-tight", children: [
        "Built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "serious lifters" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "The Push Pull Legs split is the most efficient hypertrophy framework for intermediate and advanced lifters. Each muscle group gets two high-quality sessions per week — enough volume to grow, enough recovery to keep coming back stronger." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2", children: principles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.d })
    ] }, p.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Weekly Schedule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 sm:grid-cols-7 gap-2 text-center text-sm", children: [["Mon", "Rest"], ["Tue", "Rest"], ["Wed", "Pull"], ["Thu", "Legs"], ["Fri", "Rest"], ["Sat", "Rest"], ["Sun", "Push"]].map(([day, w]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: day }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 font-display font-bold ${w === "Rest" ? "text-muted-foreground" : "text-primary"}`, children: w })
      ] }, day)) })
    ] })
  ] });
}
export {
  About as component
};
