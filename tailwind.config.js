/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
        "accent-light": "var(--accent-light)",
        text: "var(--text)",
        light: "var(--light)",
        "gray-light": "var(--gray-light)",
        dark: "var(--dark)",

        "vibrant-red": "#e85e71",
        "golden-yellow": "#e9d867",
        "fresh-green": "#39df20",
        "dark-gray": "#1b1b1b",
        "light-brown": "#1e1b15",
      },
      boxShadow: {
        hover: "-4px 4px 0 0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
