/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        mostaza: "#E0B973",
      },
      fontFamily: {
        adobe: ["Libre Baskerville"],
        monse: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
