/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs' : '0px',
        'sm': '576px',   // Small devices like mobile
        'md': '768px',   // Medium devices like tablets
        'lg': '992px',  // Large devices like laptops
        'xl': '1280px',  // Extra-large devices like desktops
        '2xl': '1400px', // Ultra-large screens
      }
    },
    fontFamily: {
      'kanit' : ['Kanit']
    }
  },
  plugins: [],
}

