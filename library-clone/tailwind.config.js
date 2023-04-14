/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        custom: '540px',
        big: '580px',
        h_img: '250px',
        h_img1: '254px',
        h_max : '527px'
      },
      maxHeight:{
        h_max : '527px'
      },
      width: {
        widht_img: '192px',
        width_2 : '170px',
        width_3: '349px'
      }
    },
  },
  plugins: [],
}

