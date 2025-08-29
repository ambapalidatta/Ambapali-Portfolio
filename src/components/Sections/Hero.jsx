// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
// import Container from "../UI/Container";

// // Custom animation variants
// const textVariant = {
//   hidden: { opacity: 0, x: -50 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const imageVariant = {
//   hidden: { opacity: 0, x: 50 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden">
//       {/* Background gradient */}
//       <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(70rem_30rem_at_120%_20%,rgba(236,72,153,0.12),transparent)]" />

//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh] gap-8 py-16">
//           {/* LEFT SIDE - Text */}
//           <motion.div
//             variants={textVariant}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start justify-center"
//           >
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
//               Hi, I’m{" "}
//               <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
//                 Ambapali Datta
//               </span>
//             </h1>
//             <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
//               Front-end developer crafting smooth, accessible, and beautiful web
//               experiences.
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
//               <a
//                 href="#projects"
//                 className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
//               >
//                 See Projects <ArrowUpRight size={16} />
//               </a>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-xl border px-4 py-2"
//               >
//                 Contact Me
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm opacity-80">
//               <a
//                 href="https://github.com/ambapalidatta"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 hover:opacity-100"
//               >
//                 <Github size={16} />
//                 GitHub
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/ambapali-datta-540408251/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 hover:opacity-100"
//               >
//                 <Linkedin size={16} />
//                 LinkedIn
//               </a>
//               <a
//                 href="mailto:ambapali890@gmail.com"
//                 className="inline-flex items-center gap-2 hover:opacity-100"
//               >
//                 <Mail size={16} />
//                 Email
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE - Image */}
//           <motion.div
//             variants={imageVariant}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="order-1 md:order-2 flex justify-center md:justify-end"
//           >
//             <img
//               src="/images/projects/profile.png" // Replace with your image path
//               alt="Ambapali Datta"
//               className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
//             />
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Container from "../UI/Container";

// Custom animation variants
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(70rem_30rem_at_120%_20%,rgba(236,72,153,0.12),transparent)]" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-[70vh] gap-8 py-16">
          {/* LEFT SIDE - Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 md:order-1 flex flex-col items-center md:items-center justify-center text-center"
          >
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                  Ambapali Datta
                </span>
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Front-end developer crafting smooth, accessible, and beautiful
                web experiences.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  See Projects <ArrowUpRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2"
                >
                  Contact Me
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm opacity-80">
                <a
                  href="https://github.com/ambapalidatta"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ambapali-datta-540408251/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="mailto:ambapali890@gmail.com"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center items-center"
          >
            <img
              src="/images/projects/profile.png" // Replace with your image path
              alt="Ambapali Datta"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
