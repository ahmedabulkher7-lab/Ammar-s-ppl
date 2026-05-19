import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Repeat, Layers } from "lucide-react";
import type { Exercise } from "@/lib/workouts";

const diffColor: Record<Exercise["difficulty"], string> = {
  Beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Advanced: "bg-primary/15 text-primary border-primary/30",
};

export function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift"
    >
      <div className="relative aspect-video overflow-hidden bg-surface-2">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${exercise.youtubeId}?autoplay=1`}
            title={exercise.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={exercise.image}
              alt={exercise.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <button
              onClick={() => setPlaying(true)}
              aria-label={`Play ${exercise.name} tutorial`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-red shadow-red transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground translate-x-0.5" />
              </span>
            </button>
            <span
              className={`absolute top-3 right-3 rounded-full border px-3 py-1 text-xs font-semibold ${diffColor[exercise.difficulty]}`}
            >
              {exercise.difficulty}
            </span>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold tracking-wide">{exercise.name}</h3>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-foreground font-semibold">{exercise.sets}</span> sets
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <Repeat className="h-4 w-4 text-primary" />
            <span className="text-foreground font-semibold">{exercise.reps}</span> reps
          </span>
        </div>
      </div>
    </motion.article>
  );
}
