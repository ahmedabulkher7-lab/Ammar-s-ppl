import { Camera, Send, Video, Globe, Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-red p-2">
              <Dumbbell className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg tracking-wider font-bold">
              AMMAR <span className="text-primary">FITNESS</span>
            </span>
          </div>
          <div className="flex gap-3">
            {[Camera, Send, Video, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          Designed by Ahmed Yasser · © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
