/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#30BEFF',
        'accent-color-light': '#E0F5FF',
        'light-gray': '#F6f6f6',
        'vibrant-red': '#e85e71',
        'golden-yellow': '#e9d867',
        'fresh-green': '#39df20',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
