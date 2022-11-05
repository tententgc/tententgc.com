/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "primary": "#1e3a8a",
        "secondary": "#ffed4a",
        "danger": "#e3342f",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}