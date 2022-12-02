/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'button-yellow': '#edcd1f',
        'blue-text' : '#0079ae'
    },
      height: {
        '40vh' : '40vh',
        '50vh' :'50vh',
        '60vh' : '60vh',
        '80vh' : '80vh', 
      },
      backgroundImage: {
        'sectionOne' : "url('/background.jpg')"
      },
      fontFamily:{
        Montserrat : "Montserrat",
        Roboto : "Roboto",
        Lato : "Lato",
        Poppins : "Poppins"
      },
      fontSize:{
        '7.5xl' : '5rem'
      }
    },
  },
  plugins: [],
}