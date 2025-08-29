import { motion, AnimatePresence } from "framer-motion";
import Container from "../UI/Container";
import { navItems } from "../../data/navItems";

export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t"
        >
          <Container>
            <div className="flex flex-col py-2">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="px-2 py-3 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
