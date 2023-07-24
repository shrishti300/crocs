/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'pressstart2p': ['"Press Start 2P"', 'cursive'],
        'caprasimo' :['Caprasimo', 'Quicksand', 'cursive']
      },
    },
  },
  variants:{},
  plugins: [],
}

