/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': '#30B3FF',
        'light-blue': '#E0F5ff',
        'light-gray': '#F6f6f6',
        red: '#FF2633',
        green: '#3FD93C',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
