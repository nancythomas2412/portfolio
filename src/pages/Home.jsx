import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center transition-all duration-500 dark:text-gray-600 relative overflow-hidden">
      {/* Hero Section */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="dark:text-blue-400">Nancy Thomas</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl max-w-3xl dark:text-gray-300"
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
          className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-blue-600 dark:border-gray-200 text-red-800 dark:text-gray-200 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;
