import { motion } from "framer-motion";
import Container from "../UI/Container";
import Card from "../UI/Card";
import { fadeUp } from "../../styles/animations";
import { experienceData } from "../../data/experienceData";

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
          {/* LEFT */}
          <Card className="md:col-span-1 p-6 leading-relaxed">
            <p>
              I’m a B.Tech Computer Science student with a strong foundation in
              programming, problem-solving, and modern web technologies. I enjoy
              building responsive and user-friendly applications with a focus on
              clean design, accessibility, and performance.
            </p>
            <p className="mt-4">
              My core strengths lie in Java, Data Structures & Algorithms, and
              frontend development using React. I am passionate about learning
              new technologies, improving my coding skills, and applying them to
              create real-world projects. Currently, I am preparing for
              placement opportunities where I can contribute as a software
              developer while continuing to grow as a professional.
            </p>
          </Card>

          {/* RIGHT */}
          <Card className="md:col-span-2 p-6">
            {/* Quick Facts + Education */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Quick Facts */}
              <div>
                <h3 className="font-semibold">Quick Facts</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>📍 Kolkata, India</li>
                  <li>💼 Open to opportunities</li>
                  <li>🎯 Interests: Frontend Development, Java, DSA</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="font-semibold">Education</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    🎓 B.Tech in Information Technology – [B. P. Poddar
                    Institute of Management and Technology], 2022–2026
                  </li>
                  <li>🏫 ISC – [St. Stephen's School, Habra], 2022 (84%)</li>
                  <li>🏫 ICSE – [St. Stephen's School, Habra], 2020 (82%)</li>
                </ul>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-8">
              <h3 className="font-semibold">Experience</h3>
              <div className="mt-4 space-y-6">
                {experienceData.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b pb-4"
                  >
                    <p className="text-sm font-medium">
                      {exp.role} –{" "}
                      <span className="text-indigo-600">{exp.company}</span>
                    </p>
                    <p className="text-xs text-zinc-500">{exp.duration}</p>
                    <p className="mt-2 text-sm">{exp.desc}</p>
                    <ul className="mt-2 list-disc pl-5 text-xs space-y-1">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
