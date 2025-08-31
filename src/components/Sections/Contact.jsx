import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import { fadeUp } from "../../styles/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thanks! Your message has been staged. Replace with your own handler."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Left section - Center aligned */}
          <div className="flex flex-col justify-center items-center text-center space-y-6">
            <h2 className="text-4xl font-bold text-zinc-800 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              I’d love to hear from you!
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
              Want to collaborate or have a role in mind? Send a message and
              I'll get back to you.
            </p>

            {/* Email link */}
            <a
              href="mailto:ambapali890@gmail.com"
              className="inline-flex items-center gap-2 text-base hover:underline"
            >
              <Mail className="w-5 h-5" /> ambapali890@gmail.com
            </a>

            {/* Social icons row */}
            <div className="flex gap-6 mt-4 text-zinc-600 dark:text-zinc-300 justify-center">
              <a
                href="https://www.linkedin.com/in/ambapali-datta-540408251/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ambapalidatta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/_ambapaliiiiii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right section - Form */}
          <Card className="p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message"
                />
              </div>
              <button
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 transition"
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

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch(
//       "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL", // 👈 paste the deployed URL here
//       {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       alert("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       alert("❌ Something went wrong. Try again.");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("⚠️ Error submitting form");
//   }
// };
