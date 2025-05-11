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
        darkGreen: '#0E3228',
      },
      fontFamily: {
        interTight: ["'Inter Tight'", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        subtle: "0 1px 4px rgba(0, 0, 0, 0.06)",
      }
    },
  },
  plugins: [],
}
