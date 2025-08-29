import { motion } from "framer-motion";
import Container from "../UI/Container";
import Card from "../UI/Card";
import { fadeUp } from "../../styles/animations";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          <Card className="md:col-span-2 p-6 leading-relaxed">
            <p>
              Many developers struggle to present their skills and projects in
              an engaging way. A traditional resume lacks interactivity and
              visual appeal. This portfolio solves that by creating a dynamic,
              personalized website with smooth navigation and tasteful
              animations.
            </p>
            <p className="mt-4">
              I focus on performance, accessibility, and clean design. I enjoy
              building component systems, micro‑interactions, and thoughtful
              content structure.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>📍 Kolkata, India</li>
              <li>💼 Open to opportunities</li>
              <li>🎯 Interests: Frontend Development, Java</li>
            </ul>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
