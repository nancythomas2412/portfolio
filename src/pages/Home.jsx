import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-lg mt-4 text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Showcasing my skills and projects
      </motion.p>
    </section>
  );
}

export default Home;
