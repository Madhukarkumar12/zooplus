/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fefefe: '#FEFEFE',
        // "1e1e1e": '1E1E1E',
        dark: '#1E1E1E',
      },
    },
  },
  plugins: [],
}
