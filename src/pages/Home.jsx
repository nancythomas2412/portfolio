import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

function Home() {
  return (
    <section className="max-w-full flex flex-col justify-center items-center p-2 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Avatar (On Top for Small Screens, Right for Large Screens) */}
        <div className="order-1 sm:order-2 flex justify-center items-center">
          <Avatar />
        </div>

        {/* Content (Below Avatar for Small Screens, Left for Large Screens) */}
        <div className="order-2 sm:order-1 flex flex-col justify-center items-center sm:items-start">
          <motion.h1
            className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-black dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm{" "}
            <span className="text-3xl md:text-5xl text-blue-600 dark:text-blue-400">
              Nancy Thomas
            </span>
          </motion.h1>

          <motion.p
            className="sm:text-sm md:text-lg text-gray-700 dark:text-gray-300 mt-2 text-center sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Frontend Developer, Designer, Digital Artist, 2D Animator, etc.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              to="/projects"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full text-sm sm:text-lg font-semibold hover:bg-blue-400 dark:hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 sm:px-4 sm:py-2 border border-gray-300 dark:border-gray-500 text-blue-600 dark:text-gray-300 rounded-full text-sm sm:text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;