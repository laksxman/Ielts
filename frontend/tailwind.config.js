/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ye important hai Tailwind purge ke liye
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
