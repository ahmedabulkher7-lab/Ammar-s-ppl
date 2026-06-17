import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/push1", label: "Push Day 1" },
  { to: "/push2", label: "Push Day 2" },
  { to: "/pull", label: "Pull Day" },
  { to: "/legs", label: "Legs Day" },
  { to: "/diet", label: "Diet" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="rounded-lg bg-gradient-red p-2 shadow-red transition-transform group-hover:scale-110">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl tracking-wider font-bold">
            AMMAR <span className="text-primary">FITNESS</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-lg transition-colors hover:text-foreground hover:bg-surface"
              activeProps={{ className: "px-4 py-2 text-sm font-medium rounded-lg text-foreground bg-surface" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-surface"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground rounded-lg hover:bg-surface hover:text-foreground"
                  activeProps={{ className: "px-4 py-3 text-sm font-medium rounded-lg text-foreground bg-surface" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
