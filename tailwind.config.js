/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    darkMode: 'class',
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
})
