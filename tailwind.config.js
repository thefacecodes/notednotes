/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash": ["Clash Display"],
        "DM": ["DM Sans"]
      },
      backgroundImage: {
        "circle": "url('../public/circle.png')"
      }
    },
  },
  plugins: [],
}
