const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaeeff',
          100: '#c4ccef',
          200: '#9da7e2',
          300: '#7681d5',
          400: '#4e56c8',
          500: '#353aaf',
          600: '#292988',
          700: '#1f1d62',
          800: '#12143d',
          900: '#050819',
        },
        secondary: {
          50: '#dffbf8',
          100: '#c1ece6',
          200: '#9fddd7',
          300: '#7ccdca',
          400: '#59bfbd',
          500: '#40a69d',
          600: '#2f8174',
          700: '#1c5d4f',
          800: '#08382c',
          900: '#00150e',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        ...defaultTheme.spacing,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
