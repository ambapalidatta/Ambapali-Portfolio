import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import { fadeUp } from "../../styles/animations";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thanks! Your message has been staged. Replace with your own handler."
    );
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Contact
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <Card className="p-6">
            <h3 className="font-semibold">Let's work together</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Want to collaborate or have a role in mind? Send a message and
              I'll get back to you.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href="ambapali890@gmail.com"
                className="inline-flex items-center gap-2"
              >
                <Mail size={16} /> ambapali890@gmail.com
              </a>
              <a
                href="tel:+91 7029857113"
                className="inline-flex items-center gap-2"
              >
                <Phone size={16} /> +91 70298 57113
              </a>
            </div>
          </Card>
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell me about your project"
                />
              </div>
              <button
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                type="submit"
              >
                Send Message <ArrowUpRight size={16} />
              </button>
            </form>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
