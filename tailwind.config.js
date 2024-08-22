/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login': "url('../src/assets/icons/fondo-login.png')"
      }
    },
  },
  plugins: [],
}

