import { createContext, useState, useEffect, useContext } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// ThemeProvider component to provide theme context to children
export function ThemeProvider({ children }) {
  // Get stored theme from localStorage
  const storedTheme = localStorage.getItem("theme");
  // Set initial theme state based on stored theme or default to light
  const [darkMode, setDarkMode] = useState(storedTheme ? storedTheme === "dark" : false);

  // Update theme in localStorage and document class based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}