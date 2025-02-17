import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated Intro */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Nancy</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mt-4 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Frontend Developer & Digital Artist
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        className="mt-6 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-500 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
      </motion.div>
    </section>
  );
}

export default Home;
