export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  youtubeId: string;
  image: string;
};

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=70`;

export const pushDay1: Exercise[] = [
  { name: "Incline Dumbbell Press", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "8iPEnn-ltC8", image: img("photo-1581009146145-b5ef050c2e1e") },
  { name: "Chest Press", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "xUm0BiZCWlQ", image: img("photo-1571019613454-1cb2f99b2d8b") },
  { name: "Shoulder Press", sets: 3, reps: "8–10", difficulty: "Intermediate", youtubeId: "qEwKCR5JCog", image: img("photo-1532029837206-abbe2b7620e3") },
  { name: "Chest Flies", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "Z57CtFmRMxA", image: img("photo-1517836357463-d25dfeac3438") },
  { name: "Lateral Raises", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "3VcKaXpzqRo", image: img("photo-1583454110551-21f2fa2afe61") },
  { name: "Tricep Cable Pushdown", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "2-LAMcpzODU", image: img("photo-1530822847156-5df684ec5ee1") },
  { name: "Overhead Tricep Extension", sets: 3, reps: "10–12", difficulty: "Intermediate", youtubeId: "_gsUck-7M74", image: img("photo-1599058917212-d750089bc07e") },
];

export const pushDay2: Exercise[] = [
  { name: "Shoulder Press", sets: 3, reps: "8–10", difficulty: "Intermediate", youtubeId: "qEwKCR5JCog", image: img("photo-1532029837206-abbe2b7620e3") },
  { name: "Lateral Raises", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "3VcKaXpzqRo", image: img("photo-1583454110551-21f2fa2afe61") },
  { name: "Flat Bench Press", sets: 3, reps: "8–12", difficulty: "Beginner", youtubeId: "rT7DgCr-3pg", image: img("photo-1581009146145-b5ef050c2e1e") },
  { name: "Incline Chest Press Machine", sets: 3, reps: "8–12", difficulty: "Intermediate", youtubeId: "ig0NyNlSce4", image: img("photo-1571019613454-1cb2f99b2d8b") },
  { name: "Close-Grip Bench Press", sets: 3, reps: "10–12", difficulty: "Intermediate", youtubeId: "nEF0bv2FW94", image: img("photo-1530822847156-5df684ec5ee1") },
  { name: "Overhead Tricep Extension", sets: 3, reps: "10–12", difficulty: "Intermediate", youtubeId: "YbX7Wd8jQ-Q", image: img("photo-1599058917212-d750089bc07e") },
];

export const pullDay: Exercise[] = [
  { name: "Lat Pulldown", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "CAwf7n6Luuc", image: img("photo-1598971639058-fab3c3109a00") },
  { name: "Seated Row", sets: 4, reps: "8–12", difficulty: "Intermediate", youtubeId: "GZbfZ033f74", image: img("photo-1574680096145-d05b474e2155") },
  { name: "Dumbbell Row", sets: 4, reps: "8–10", difficulty: "Advanced", youtubeId: "dFzUjzfih7k", image: img("photo-1534438327276-14e5300c3a48") },
  { name: "Reverse Flies", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "6cHY60y7QRU", image: img("photo-1517344884509-a0c97ec11bcc") },
  { name: "Shrugs", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "g6qbq4Lf1FI", image: img("photo-1581009146145-b5ef050c2e1e") },
  { name: "Hammer Curls", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "TwD-YGVP4Bk", image: img("photo-1581009137042-c552e485697a") },
  { name: "Dumbbell Curls", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "8d2we4UqOSs", image: img("photo-1583500178690-f7fd39c5691d") },
];

export const legsDay: Exercise[] = [
  { name: "Hack Squat", sets: 4, reps: "8–12", difficulty: "Advanced", youtubeId: "fE5BWPy7uRc", image: img("photo-1434596922112-19c563067271") },
  { name: "Back Extensions", sets: 4, reps: "15–20", difficulty: "Advanced", youtubeId: "ph3pddpKzzw", image: img("photo-1517836357463-d25dfeac3438") },
  { name: "Leg Press", sets: 4, reps: "10–12", difficulty: "Intermediate", youtubeId: "IZxyjW7MPJQ", image: img("photo-1574680096145-d05b474e2155") },
  { name: "Hamstring Curl", sets: 3, reps: "10–12", difficulty: "Beginner", youtubeId: "1Tq3QdYUuHs", image: img("photo-1571019613454-1cb2f99b2d8b") },
  { name: "Leg Extension", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "YyvSfVjQeL0", image: img("photo-1534438327276-14e5300c3a48") },
  { name: "Adductors", sets: 3, reps: "12–15", difficulty: "Beginner", youtubeId: "MLBm7i341Rw", image: img("photo-1518611012118-696072aa579a") },
  { name: "Calf Raises", sets: 4, reps: "12–15", difficulty: "Beginner", youtubeId: "gwLzBJYoWlI", image: img("photo-1583454110551-21f2fa2afe61") },
];
