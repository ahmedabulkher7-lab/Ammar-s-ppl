import { motion } from "framer-motion";
import { ExerciseCard } from "./ExerciseCard";
import type { Exercise } from "@/lib/workouts";

export function WorkoutDayPage({
  title,
  tag,
  description,
  exercises,
}: {
  title: string;
  tag: string;
  description: string;
  exercises: Exercise[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {tag}
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </motion.div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exercises.map((ex, i) => (
          <ExerciseCard key={ex.name} exercise={ex} index={i} />
        ))}
      </div>
    </section>
  );
}
