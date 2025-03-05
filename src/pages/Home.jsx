import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

function Home() {
  return (
    <section className="min-h-screen flex flex-col-reverse sm:flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left transition-all duration-500 relative overflow-hidden px-6 md:px-16 gap-4 sm:gap-6 content-home">
      <div className="flex-1 flex flex-col items-center md:items-start space-y-2">
        <motion.h1
          className="text-3xl sm:text-2xl font-extrabold tracking-tight leading-tight text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{" "}
          <span className="md:text-5xl sm:text-4xl text-blue-600 dark:text-blue-400">
            Nancy Thomas
          </span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-xl max-w-3xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Frontend Developer, Designer, Digital Artist, 2D Animator etc...
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-1 md:ml-10 flex flex-wrap justify-center md:justify-start space-x-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="/projects"
            className="inline-flex justify-center items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full text-sm sm:text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-4 py-2 sm:px-6 sm:py-3 border border-gray-300 dark:border-gray-500 text-blue-600 dark:text-gray-300 rounded-full text-sm sm:text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Avatar Section */}
      <div className="flex-1 flex justify-center md:justify-end items-center">
        <div className="relative">
          <Avatar />
          <div className="absolute top-[-40px] sm:top-[-60px] md:top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;