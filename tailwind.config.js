/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'custom-43-2': '43.2px',  
      },

      margin: {
        '88': '88px',
      },

      colors: {
        'custom-blue': '#4891FF',
        'hover-blue': '#1570F9',
        'light-blue': '#DBE7F9'
      },

    
      letterSpacing: {
        '-3px': '-0.1875rem', 
      },

      width: {
        '400': '400px'
      }
    },
  },
  plugins: [],
}