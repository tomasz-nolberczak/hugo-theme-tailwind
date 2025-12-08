/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./themes/**/layouts/**/*.html', './layouts/**/*.html'],
  theme: {
    extend: {
      colors: {
        background: '#121417',
        primary: '#FFD063',
        secondary: '#E5E5E5',
        accent: '#FFC447',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
