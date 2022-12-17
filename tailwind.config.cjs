/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        secondary: "#00548B",
        background: "#212121",
        active: "#0D180E",
      },
    },
  },
  plugins: [],
};
