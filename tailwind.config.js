/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cinzel": ["Cinzel", "serif"],
        "lora": ["lora", "serif"],
        "raleway": ["Raleway", "sans-serif"]
      },
    },
  },
  plugins: [],
}