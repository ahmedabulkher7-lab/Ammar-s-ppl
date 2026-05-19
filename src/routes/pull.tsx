import { createFileRoute } from "@tanstack/react-router";
import { WorkoutDayPage } from "@/components/WorkoutDayPage";
import { pullDay } from "@/lib/workouts";

export const Route = createFileRoute("/pull")({
  head: () => ({
    meta: [
      { title: "Pull Day — Back, Rear Delts & Biceps | Ahmed Fitness" },
      { name: "description", content: "Pull day workout: lat pulldown, seated row, Romanian deadlift, reverse flies, shrugs, hammer and dumbbell curls." },
      { property: "og:title", content: "Pull Day Workout" },
      { property: "og:description", content: "Back, rear delts, and biceps hypertrophy session." },
    ],
  }),
  component: () => (
    <WorkoutDayPage
      tag="Day 2"
      title="Pull Day"
      description="Back, rear delts, and biceps. Lead every rep with the elbows, drive through the lats, and own the stretch."
      exercises={pullDay}
    />
  ),
});
