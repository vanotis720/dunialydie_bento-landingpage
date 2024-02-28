/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgoround': "url('src/assets/profile-pic(4).png')",
        'backgoround1': "url('src/assets/profile-pic(3).png')",
        'backgoround2': "url('src/assets/profile-pic(3).png')",
        'backgoround3': "url('src/assets/profile-pic(3).png')",

      },
      fontFamily: {
        'custom': ['Cormorant', 'sans-serif'],
        'custonone':['Kdam Thmor Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

