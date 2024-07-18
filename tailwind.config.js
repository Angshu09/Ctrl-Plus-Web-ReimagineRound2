/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },
      screens: {
        'custom': '415px',
        'custom2': '885px'
      },
    },
  },
  plugins: [],
}

