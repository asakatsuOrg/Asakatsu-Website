/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        secondary: "#00548B",
        background: "#212121",
        active: "#0D180E",
        twitter: "#1DA1F2",
        youtube: "#FF0000",
        linkedin: "#0077b5",
      },
    },
  },
  plugins: [],
};
