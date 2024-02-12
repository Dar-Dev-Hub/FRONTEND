/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        playFait:'Playfair Display, serif'
      },
      colors:{
        "primaryy":"#1560BD",
        "secondary":"#DAAA00"
      },
      backgroundImage: {
        'header-bg': "url('./src/assets/bgHome.png')",
        'map-bg':"url('./src/assets/app-map.png')",
        'subs-bg':"url('./src/assets/parallax_form.jpg')",
        'bg-2':"url(./src/assets/bg-2.png.webp)",
        'contact-bg':"url(./src/assets/contact-bg.jpg)",
        "test":"url(./src/assets/bg-2.png.webp)",
        "ourCompanySmartIdea":"url(https://adkach.com/wp-content/uploads/2022/08/SMART-IDEA-23.webp)",
        "niceword":"url(https://adkach.com/wp-content/uploads/2018/02/card_app_BG_10-percent.jpg)",
        "ourVision":"url(https://adkach.com/wp-content/uploads/2022/08/OUR-VISION-23.webp)"
      },
      boxShadow:{
        activeCaroucel:' 0 0 0px 6px rgba(0, 0, 0, 0.1),0 0 0px 12px rgba(0, 0, 0, 0.1)',
        shadowSubs:' 0 0 0px 12px rgba(0, 0, 0, 0.4),0 0 0px 18px rgba(0, 0, 0, 0.2)',

        shadowHome: `35px 90px 0px 20px rgba(21, 96, 189, 0.2),

        -0px -90px 0px 40px rgba(218  , 170, 0, 0.2)`,
        shadowCard:'0 25px 35px rgba(68,162,255,0.1)'
      },
      keyframes: {
        topTrans: {
            '0%': { transform: 'translateY(-100px) ' },
            '100%': { transform: 'translateY(0px) ' },
        },
        rightTrans: {
          '0%': { transform: 'translateX(500px)' },
          '100%': { transform: 'translateX(0px)' },
      }
    },
    animation: {
      topTrans: 'topTrans 2s ease-in-out ',
      rightTrans: 'rightTrans 2s ease-in ',
  }
    },
  },
   plugins: [
    require('flowbite/plugin'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.header-height': {
          height: 'calc(100vh - 10vh )',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  corePlugins: {
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
}

