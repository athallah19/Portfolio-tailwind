/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        secondary: '#64748b',
        dark: '#020617',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        inter: '"Poppins", sans-serif;',
      },
    }
  },
  plugins: [],
}

