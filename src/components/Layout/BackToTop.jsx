import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "../../utils/scrollToId";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scrollToId("home")}
          className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 shadow-lg backdrop-blur hover:shadow-xl dark:bg-zinc-900/70"
          aria-label="Back to top"
        >
          <ArrowUp size={16} /> Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
