/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white2: '#f2ece9',
        blue2: '#67c1ac',
        peach2: '#67c1ac',
        yellow2: '#e8bf62',
        red2: '#e0696d'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}