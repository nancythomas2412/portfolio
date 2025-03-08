import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const [activeTab, setActiveTab] = useState("latest");

  // Latest projects
  const latestProjects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React.js and Tailwind CSS.",
      image: "https://via.placeholder.com/600x400",
      demo: "https://github.com/",
      github: "https://github.com/Nancythomas2412/",
    },
    {
      title: "Youtube Clone",
      description: "A simple yet powerful clone for Youtube.",
      image: "https://via.placeholder.com/600x400",
      demo: "https://github.com/",
      github: "https://github.com/nancythomas2412/youtube_clone",
    },
  ];

  // All projects (includes latest ones too)
  const allProjects = [
    ...latestProjects,
    {
      title: "Rock-Paper-Scissor Game App",
      description: "A simple Rock-Paper-Scissor Game app.",
      image: "https://via.placeholder.com/600x400",
      demo: "https://github.com/",
      github: "https://github.com/nancythomas2412/JS3-Rock_Paper_Scissor",
    },
    {
      title: "E-commerce Store",
      description: "A fully functional e-commerce website using React.",
      image: "https://via.placeholder.com/600x400",
      demo: "https://your-ecommerce.com",
      github: "https://github.com/Nancythomas2412/ecommerce-repo",
    },
  ];

  return (
    <section className="min-h-screen text-white flex flex-col items-center py-12 px-6 dark:text-[var(--primary-dark)]">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Tabs: Latest & All */}
      <div className="mt-6 flex space-x-6">
        <button
          onClick={() => setActiveTab("latest")}
          className={`px-6 py-2 rounded-lg transition ${
            activeTab === "latest"
              ? "bg-blue-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Latest Projects
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 py-2 rounded-lg transition ${
            activeTab === "all"
              ? "bg-blue-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          All Projects
        </button>
      </div>

      {/* Project Cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mt-10 w-full ${
          activeTab === "latest"
            ? "flex justify-center flex-wrap gap-8"
            : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        }`}
      >
        {(activeTab === "latest" ? latestProjects : allProjects).map(
          (project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex mt-4 space-x-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}

export default Projects;