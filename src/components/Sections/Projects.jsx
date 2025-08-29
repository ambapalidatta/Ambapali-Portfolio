import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { projectsData } from "../../data/projectsData";
import { fadeUp } from "../../styles/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Projects
        </motion.h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
                {/* Replaced gradient with image */}
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border relative">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                <h3 className="mt-4 text-lg font-semibold group-hover:text-indigo-600 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3 pt-2">
                  <a
                    target="_blank"
                    href={p.href}
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow transition-all duration-300 hover:bg-indigo-50"
                  >
                    Live <ExternalLink size={16} />
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-300"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
