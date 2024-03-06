/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Cormorant', 'sans-serif'],
        'custonone':['Kdam Thmor Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

