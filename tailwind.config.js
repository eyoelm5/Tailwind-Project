/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio:3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%':{ transform: 'scaleY(0)'},
          '80%':{ transform: 'scaleY(1.2)'},
          '100%':{ transform: 'scaleY(1)'},
        },
        'slide-in-left':{
          '0%':{ transform: 'translateX(110%)', opacity:'1'},
          '100%':{ transform: 'translateX(0)', opacity:'1'}
        }, 

        'slide-in-right':{
          '0%':{ transform: 'translateX(-110%)', opacity:'1'},
          '100%':{ transform: 'translateX(0)', opacity:'1'}
        },

        'pop-up':{
          '0%':{ transform: 'scale(0)',  opacity:'1'},
          '100%':{ transform: 'scale(1)', opacity:'1'}
        }
      },
      animation:{
        'open-menu': '0.5s ease-in-out open-menu',
        'slide-in-left': '1s ease-out 1 slide-in-left forwards',
        'slide-in-right': '1s ease-out 1 slide-in-right forwards',
        'pop-up':'1s ease-in-out 1 pop-up forwards'
      },
    },
  },
  plugins: [],
}

