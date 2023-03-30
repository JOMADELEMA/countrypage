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
        '160': '36rem',
        '192': '45rem',
        '224':  '50rem'

      },
      backgroundImage: {
        //path must be relative to global css not config.js
        'arco': "url('../../public/images/bg-arco.png')",
        'arco-xl': "url('../../public/images/bg-arco-xl.png')",
        'antigua-square': "url('../../public/images/antigua_square.jpeg')",
        'lago-square': "url('../../public/images/lago_square.jpg')",
        'tikal-square': "url('../../public/images/tikal_square.jpeg')",
        'semuc-square': "url('../../public/images/semuc_square.jpg')",
      }, 
      backgroundPosition: {
        '-top-1': 'center top -6rem',
        '-top-2': 'center top -8rem',
        '-top-3': 'center top -10rem',
        '-top-4': 'center top -12rem',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      backgroundSize: {
        '150': '175%',
        '16': '4rem',
      },
    },
  },
  plugins: [],
}