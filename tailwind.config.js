const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark" : "#171717",
        "light" : "#ededed",
        "myred" : "#da0037",
        "mygray" : "#444444"
      },
      
      fontFamily: {
        "dunbarlight" : ["myFontLight"],
        "dunbarbold" : ["myFontBold"]
      },
      keyframes: {
        float: {
          '0%': {
            opacity: '0',
            transform: 'translatey(0px)'
        },
        '50%': {
          opacity: '0.6',
            transform: 'translatey(-50px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translatey(0px)'
      },
    }, 
    fadeIn: {
      '0%': {
        opacity: '0'
    },
    '25%': {
      opacity: '0'
  },
    '50%': {
      opacity: '0.6'
    },
    '75%': {
      opacity: '1'
  },
    '100%': {
      opacity: '1'
  },
  
}
  },
  animation: {
    float: 'float 1.5s ease-in-out',
    fadeIn: 'fadeIn 6s ease-in-out'
},
},
  variants: {
    extend: {},
  },
  plugins: [
   
      ],},}
