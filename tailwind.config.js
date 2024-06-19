/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vollkorn: ['Vollkorn', 'serif'],
        dancingScript: ['Dancing Script','cursive'],
      },
    },
  },
  plugins: [],
}