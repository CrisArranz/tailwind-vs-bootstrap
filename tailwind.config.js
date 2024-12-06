/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        'background-shine': {
          '0%': { 'background-position': '0 0'},
          '100%': { 'background-position': '-150% 0' },
        }
      }
    },
  },
  plugins: [],
}

