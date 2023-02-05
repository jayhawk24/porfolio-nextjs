/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#00dede',
          '50': '#ebfffc',
          '100': '#cdfffb',
          '200': '#a1fffa',
          '300': '#60fff9',
          '400': '#18f8f4',
          '500': '#00dede',
          '600': '#00adb5',
          '700': '#088c96',
          '800': '#10707a',
          '900': '#125d67',
        },
        secondary: {
          DEFAULT: '#5c6d7e',
          '50': '#f4f6f7',
          '100': '#e3e8ea',
          '200': '#cad2d7',
          '300': '#a4b1bc',
          '400': '#788998',
          '500': '#5c6d7e',
          '600': '#4f5b6b',
          '700': '#454e59',
          '800': '#3d444d',
          '900': '#393e46',
        },
        black: {
          DEFAULT: '#506f8a',
          '50': '#f3f6f8',
          '100': '#e0e8ed',
          '200': '#c4d2dd',
          '300': '#9bb2c5',
          '400': '#6b8aa5',
          '500': '#506f8a',
          '600': '#455c75',
          '700': '#3d4e61',
          '800': '#374353',
          '900': '#222831',
        },
        white: {
          DEFAULT: '#9a9a9a',
          '50': '#f8f8f8',
          '100': '#eeeeee',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#b4b4b4',
          '500': '#9a9a9a',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
        },

        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      }
    },
  },
  plugins: [],
}
