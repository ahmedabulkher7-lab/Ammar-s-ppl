import { createFileRoute } from "@tanstack/react-router";
import { WorkoutDayPage } from "@/components/WorkoutDayPage";
import { pushDay1 } from "@/lib/workouts";

export const Route = createFileRoute("/push1")({
  head: () => ({
    meta: [
      { title: "Push Day 1 — Chest, Shoulders & Triceps | Ahmed Fitness" },
      { name: "description", content: "Push day workout: incline dumbbell press, chest press, shoulder press, lateral raises, tricep work with tutorial videos." },
      { property: "og:title", content: "Push Day 1 Workout" },
      { property: "og:description", content: "Chest, shoulders, and triceps hypertrophy session." },
    ],
  }),
  component: () => (
    <WorkoutDayPage
      tag="Day 1"
      title="Push Day 1"
      description="Chest, shoulders, and triceps. Focus on controlled eccentrics and a strong squeeze at the top of every rep."
      exercises={pushDay1}
    />
  ),
});
