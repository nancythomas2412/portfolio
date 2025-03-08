import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../pages/context/ThemeContext";
import myLogo from "../assets/myLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll only on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-2xl ${
        isMobile && isScrolled ? "backdrop-blur-md py-2" : "py-4"
      }`}
    >
      <div
        className={`w-full px-6 flex justify-between items-center transition-all duration-300 ${
          isMobile && isScrolled ? "scale-90" : "scale-100"
        }`}
      >
        <motion.img
          src={myLogo}
          alt="My Logo"
          className={`rounded-full object-cover aspect-square transition-all duration-300 ${
            isMobile && isScrolled ? "w-10 h-10 translate-x-[-10px]" : "w-16 h-16"
          }`}
        />

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex space-x-6 transition-all duration-300 ${
            isMobile && isScrolled ? "text-sm" : "text-lg"
          }`}
        >
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
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
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isMobile && isScrolled ? "scale-75" : "scale-100"
          }`}
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