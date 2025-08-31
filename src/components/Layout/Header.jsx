import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navItems } from "../../data/navItems";
import MobileMenu from "../Navigation/MobileMenu";
import { scrollToId } from "../../utils/scrollToId";

export default function Header({ dark, setDark, open, setOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("home");
            }}
          >
            <span className="font-designer text-3xl bg-gradient-to-r from-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
              Ambapali Datta
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">
                {dark ? "Light" : "Dark"}
              </span>
            </button>
            <button
              className="md:hidden inline-flex items-center rounded-xl border p-2"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
