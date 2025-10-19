import Hero from "./components/Hero.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Education from "./components/Education.tsx";
import Achievements from "./components/Achievements.tsx";
import Hobbies from "./components/Hobbies.tsx";
// import Testimonials from "./components/Testimonials.tsx";
import Contact from "./components/Contact.tsx";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";

export default function App() {
  return (
    <div className="relative ">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Achievements />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Hobbies />
      </motion.div>
      {/* <Testimonials /> */}
      {/* Call-to-Action Footer */}
      <div className=" pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10 mb-2">
        © {new Date().getFullYear()} Dev. Built by 
        <a className="ml-1 font-semibold text-black border-b-1 border-gray-800" target="_blank" href="https://itsdeep.vercel.app/">Deepanshu</a>
      </footer>
    </div>
  );
}
