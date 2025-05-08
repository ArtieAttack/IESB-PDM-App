/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],



  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{
        primary: '#FEFFE4',
        primaryDark: '#E8DBAD',
        secondary: '#0B8185',
        secondaryLight: '#6E9987',
        secondaryDark: '#36544F',
      }
    },
  },
  plugins: [],
};
