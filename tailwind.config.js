/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {

      colors: {
        customGreen: '#0b3b45', // Replace with the actual hex code of the green color
 
      }
    },
  },
  plugins: [],
};
