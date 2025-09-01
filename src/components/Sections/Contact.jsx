import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import Container from "../UI/Container";
import { fadeUp } from "../../styles/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white">
            Get in Touch
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
            Whether you’d like to collaborate on a project, discuss an idea, or
            just say hello — feel free to reach out!
          </p>

          {/* Email */}
          <a
            href="mailto:ambapali890@gmail.com"
            className="inline-flex items-center gap-3 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 transition"
          >
            <Mail className="w-6 h-6" /> ambapali890@gmail.com
          </a>

          {/* Divider line */}
          <div className="w-16 h-[2px] bg-indigo-500 rounded-full"></div>

          {/* Social Links */}
          <div className="flex gap-8 text-zinc-600 dark:text-zinc-300 justify-center">
            <a
              href="https://www.linkedin.com/in/ambapali-datta-540408251/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/ambapalidatta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/_ambapaliiiiii/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Instagram className="w-7 h-7" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
