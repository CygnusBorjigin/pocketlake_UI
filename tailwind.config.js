/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sacramento": ["Sacramento", "cursive"],
        "quicksand": ["Quicksand", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"]
      },
    },
  },
  plugins: [],
}