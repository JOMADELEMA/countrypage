/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontSize: {

      // },
      spacing: {
        '128': '32rem',
        '192': '45rem',

      },
      backgroundImage: {
        //path must be relative to global css not config.js
        'arco': "url('../../public/images/bg-arco.jpeg')",
      }, 
    },
  },
  plugins: [],
}