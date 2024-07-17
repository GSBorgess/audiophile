/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#101010',
        primaryHover: '#fbaf85',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#F1F1F1',
        light: '#FAFAFA'
      },

      fontFamily: {
        'manrope': "Manrope",
      }
    },
  },
  plugins: [],
}

