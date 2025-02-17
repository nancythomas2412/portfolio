import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Message</label>
          <textarea
            rows="4"
            className="w-full mt-1 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded-lg"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Media Links */}
      <motion.div
        className="mt-10 flex space-x-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://github.com/Nancythomas2412"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nancy-t-853642201"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-3xl text-gray-400 hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
