/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark:'#222831',
      med:'#393E46',
      light:'#f0f8ff',
      action:'#B81818',
      white:'#ffffff',
      ongoing:'#E5FA05',
      completed:'#00C717',
    },
    fontFamily: {
      poppins : ['poppins','roboto']
    }
  },
  plugins: [],
}