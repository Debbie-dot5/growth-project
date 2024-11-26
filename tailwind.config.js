/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'custom-1.1': '1.1', 
      },

      margin: {
        '88': '88px',
      },

      colors: {
        'custom-blue': '#4891FF'
      }
    },
  },
  plugins: [],
}