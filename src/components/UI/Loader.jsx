// src/components/UI/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-[9999]">
      {/* Glowing Background Circle */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      {/* Your initials */}
      <motion.span
        className="relative text-4xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        AD
      </motion.span>
    </div>
  );
}
