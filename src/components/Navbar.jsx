import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../pages/context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation(); // Get current URL path

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path; // Check if current page matches

            return (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <Link
                  to={path}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                  }`}
                >
                  {item}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition-all duration-300"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div className="md:hidden flex flex-col items-center py-4">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`text-lg py-2 ${
                  isActive ? "text-blue-500 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
