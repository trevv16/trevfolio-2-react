const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#6C2978',
      primaryLight: '#7C3D87',
      secondary: '#CE91D9',
      white: '#FFFFFF',
      success: '#63A375',
      warning: '#F5D18F',
      danger: '#92140C',
      gray: colors.coolGray
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
};
