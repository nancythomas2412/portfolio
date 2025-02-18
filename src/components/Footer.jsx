import { useTheme } from "../pages/context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();

    return (
      <footer className=" text-center p-4 mt-10 dark:text-[var(--primary-dark)]">
        <p className="text-gray-400">&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  