const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "darkpurple" : "#4b22ce",
        "lightpurple" : "#aca5f4",
        "lightpink" : "#d0b2fc",
        "bluepurple" : "#2e0ea4",
        "blackpurple" : "#1c1821",
        "mediumpurple" : "#956fa8",
        "mygreen" : "#1DC690",
        "mypink" : "#DB2955",
        "myblue" : "#278AB0"
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        "readex" : ["'Readex Pro', sans-serif"],
        "roboto" : ["'Roboto Serif', sans-serif"]
      },
      keyframes: {
        mymove: {
          '0%, 100%': { top: '20rem' },
          '50%': { top: '0rem' },
    }
  },
  },
},
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut', 'animate__bounceInUp', 'animate__delay', 'animate__delay-1s', 'animate__delay-2s', 'animate__delay-5s', 'animate__infinite' ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 10000,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
}