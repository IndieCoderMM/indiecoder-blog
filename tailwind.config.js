/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#b646fc',
        'accent-color-light': '#f6eff4',
        'light-gray': '#F6f6f6',
        red: '#FF2633',
        green: '#3FD93C',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
