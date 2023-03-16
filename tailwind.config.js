/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: [
      {
        olin: {
          primary: '#087cf4',
          secondary: '#FA8D40',
          'base-100': '#ffffff',
        },
      },
      'light',
    ],
  },
}
