/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0D6EFD',
        black: '#323434',
        darkGray: '#717F7F',
        gray: '#A0A0A0',
        lightGray: '#E4E4E4',
        white: '#FFFFFF',
        offWhite: '#F1F5F4',
        red: '#DF5951',
      },
    },
  },
  plugins: [],
};