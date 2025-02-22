import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center transition-all duration-500 relative overflow-hidden">
      {/* Hero Section */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nancy Thomas</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Frontend Developer, Designer & Digital Artist
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
          className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-500 text-blue-600 dark:text-gray-300 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;
