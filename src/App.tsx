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

export default function App() {
  return (
    <div className="relative ">
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex flex-col items-center">
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        <Experience />
        <Education />
        <Achievements />
        <Hobbies />
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

        <footer className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Dev. Built with ❤️
        </footer>
      </div>
    </div>
  );
}
