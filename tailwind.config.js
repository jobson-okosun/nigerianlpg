/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.75rem', 
        '3xs': '0.625rem'
      },
      screens: {
        'xs': '400px',
        '3xl': '1600px' 
      },
      colors: {
        'primary': '#0DA2DA',
        'secondary': '#25272A'
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],     
      },
    },
  },
  plugins: [],
}

