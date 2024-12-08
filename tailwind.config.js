/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customRed: 'rgba(142, 14, 0)',
        customdarkRed: 'rgba(31, 28, 24)',
      },
    },
  },
  plugins: [],
};
