import { motion, AnimatePresence } from "framer-motion";
import Container from "../UI/Container";
import { navItems } from "../../data/navItems";

export default function MobileMenu({ open, setOpen }) {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // adjust this value = your header height
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

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
                <button
                  key={n.id}
                  onClick={() => handleScroll(n.id)}
                  className="text-left px-2 py-3 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
