/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      orange: 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      'dark-blue': 'hsl(220, 13%, 13%)',
      'dark-gray-blue': 'hsl(219, 9%, 45%)',
      'gray-blue': 'hsl(220, 14%, 75%)',
      'light-gray-blue': 'hsl(223, 64%, 98%)',
      white: 'hsl(0, 0%, 100%)',
      'transparent-black': 'rgba(0, 0, 0, 0.6)',
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    fontSize: {
      base: '16px',
    },
    keyframes: {
      slideRight: {
        '0%': { transform: 'scaleX(0)' },
        '100%': { transform: 'scaleX(1)' },
      },
      grow: {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
      fadeIn: {
        '0%': { opacity: '0', transform: 'translate(10px, -10px)' },
        '100%': { opacity: '1', transform: 'translate(0)' },
      },
    },
    animation: {
      slideRight: 'slideRight 0.3s ease-in-out forwards',
      grow: 'grow 0.3s ease-in forwards',
      fadeIn: 'fadeIn 0.3s ease-in-out forwards',
    },
    extend: {},
  },
  plugins: [],
};
