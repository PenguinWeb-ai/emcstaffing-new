/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8a122d',
        secondary: '#1A1A1A',
        accent: '#1B9AAA',
        highlight: '#6a0f24', // Darker red for better contrast
        light: '#F5F5F5',
        divider: '#DBDBDB',
        dark: '#111111'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};