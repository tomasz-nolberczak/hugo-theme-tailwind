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
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-primary-gradient': {
          background: 'linear-gradient(to right, #FFE08A, #382c09)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
      });
    },
  ],
};
