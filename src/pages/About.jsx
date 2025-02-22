import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";


function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 dark:text-gray-100">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Short Bio */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-3xl text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hi! I'm <span className="text-blue-400">Nancy</span>, a passionate Frontend Developer and Digital Artist.
        I love building interactive, user-friendly web experiences and creating stunning digital art.
      </motion.p>

      {/* Skills Section */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-6 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <SkillCard icon={<FaHtml5 />} name="HTML" />
        <SkillCard icon={<FaCss3Alt />} name="CSS" />
        <SkillCard icon={<FaJs />} name="JavaScript" />
        <SkillCard icon={<FaReact />} name="ReactJS" />
        <SkillCard icon={<FaGithub />} name="GitHub" />
      </motion.div>
    </section>

  );
}

// SkillCard Component
const SkillCard = ({ icon, name }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:scale-105 transition transform duration-300"
    whileHover={{ scale: 1.1 }}
  >
    <div className="text-5xl text-blue-400">{icon}</div>
    <p className="mt-2 text-lg font-semibold text-white">{name}</p>
  </motion.div>
);

export default About;
