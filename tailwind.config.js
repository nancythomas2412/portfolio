/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "#F8F9FA", // Light gray
          textLight: "#333", // Dark gray text for light mode
          textDark: "#fff", // White text for dark mode
          primary: "#FF9AA2", // Soft pink
          secondary: "#FFB7B2", // Peach
          accent: "#D4A5A5", // Muted red
          highlight: "#B5EAD7", // Soft green
        },
      },
    },
    plugins: [],
  };
  
  // tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // other configurations...
};
