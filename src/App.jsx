import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Layout/Footer";
import BackToTop from "./components/Layout/BackToTop";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [dark, setDark] = useDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-800 dark:from-zinc-950 dark:to-black dark:text-zinc-200">
      <Header dark={dark} setDark={setDark} open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
