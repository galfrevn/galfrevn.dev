/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      display: 'var(--display-font)',
    },
    extend: {
      colors: {
        darker: '#0F0D0E',
        accent: '#FCBA28',
      },
      transitionDelay: {
        3000: '3000ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'infinite-x': {
          '0%': { left: '100%' },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'infinite-x': 'infinite-x 6s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
