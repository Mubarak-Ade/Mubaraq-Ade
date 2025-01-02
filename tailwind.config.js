/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  
  theme: {
    extend: {
        backgroundImage: {
          'img-1': 'url("./assets/wave.svg")',
          'img-2': 'url("./assets/sprinkle.svg")',
          'img-3': 'url("./assets/shiny.svg")',
        },
        fontFamily: {
          'roboto': ['roboto'],
          'sofadiOne': 'sofadiOne',
          'sofadiOne-1': ['sofadiOne', 'sans-serif', 'roboto'],
          'ubuntu': 'ubuntu',
          'playfair': 'playfairDisplay',
          'playfairItalic': 'playfairItalic'
        }
    },
  },
  plugins: [],
}

