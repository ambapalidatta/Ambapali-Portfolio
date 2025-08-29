import { motion } from "framer-motion";
import Container from "../UI/Container";
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { fadeUp } from "../../styles/animations";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          <Card className="p-6">
            <h3 className="font-semibold">Frontend</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "Tailwind",
                "JavaScript(ES6+)",
                "React.js",
                "Tailwind CSS",
                "Bootstrap",
                "Responsive Web Design",
              ].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Git", "GitHub", "VS Code", "Vercel", "Netlify"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Soft Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Communication",
                "Discipline",
                "Adaptability",
                "Problem-Solving",
              ].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
