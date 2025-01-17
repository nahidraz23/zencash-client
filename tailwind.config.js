/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color':'#FFBF78',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

