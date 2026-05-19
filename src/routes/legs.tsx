import { createFileRoute } from "@tanstack/react-router";
import { WorkoutDayPage } from "@/components/WorkoutDayPage";
import { legsDay } from "@/lib/workouts";

export const Route = createFileRoute("/legs")({
  head: () => ({
    meta: [
      { title: "Legs Day — Quads, Hamstrings & Calves | Ahmed Fitness" },
      { name: "description", content: "Legs day workout: hack squat, Romanian deadlift, leg press, hamstring curl, leg extension, adductors, calf raises." },
      { property: "og:title", content: "Legs Day Workout" },
      { property: "og:description", content: "Full lower body hypertrophy session." },
    ],
  }),
  component: () => (
    <WorkoutDayPage
      tag="Day 3"
      title="Legs Day"
      description="Full lower body. Push through the heels, control the descent, and don't skip the calves."
      exercises={legsDay}
    />
  ),
});
