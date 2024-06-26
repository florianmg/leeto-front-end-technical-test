/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2E32BE',
      },
      fontFamily: {
        inter: 'inter, sans-serif',
      },
    },
  },
  plugins: [],
};
