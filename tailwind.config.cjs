/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#aaaafa",
        black: "#000000",
        secondary: "#000000",
      },
    },
  },
  plugins: [],
};
