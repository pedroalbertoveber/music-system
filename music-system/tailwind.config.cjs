/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#0d0d0d',
          200: '#515151',
        },
        cyber: {
          100: '#285459',
          300: '#4f868c',
          500: '#44e1f2',
          700: '#4bf2f2',
        },
      }
    },
  },
  plugins: [],
}
