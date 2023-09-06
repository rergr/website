/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#F5F5F5',
        'blue': '#607999',
        'black': '#141414',
        'navbg': 'rgba(38, 38, 37, 0.95)'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }

        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(60), blink 1s infinite "
      }

    },
    fontFamily: {
      'title-font': ['lucida Console', 'Comic sans'],
    },

  },
  plugins: [],
}
