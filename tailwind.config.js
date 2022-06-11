const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        screens: {
            'xs': '390px',
            ...defaultTheme.screens,
        },

        extend: {
            fontSize: {
                'titleText': '4vw'
            },

            spacing: {
                '1/5': '20%',
                '1/6': '16%',
                '1/7': '14%'
            },

            fontFamily: {
                'Bigshot': ['Bigshot One', 'cursive'],
                'Bungee': ['Bungee Shade', 'cursive'],
                'CinzelDecorative': ['Cinzel Decorative', 'cursive'],
                'FasterOne': ['Faster One', 'cursive'],
                'GreatVibes': ['Great Vibes', 'cursive'],
                'Rye': ['Rye', 'cursive'],
                'Tapestry': ['Tapestry', 'cursive'],
            },
        }
    },

    plugins: [
        plugin(function({ addBase, theme }) {
            addBase({
              'h1': { fontSize: theme('fontSize.6xl') },
              'h2': { fontSize: theme('fontSize.5xl') },
              'h3': { fontSize: theme('fontSize.4xl') },
              'h4': { fontSize: theme('fontSize.3xl') },
              'h5': { fontSize: theme('fontSize.2xl') },
              'h6': { fontSize: theme('fontSize.xl') },
            })
          })
    ],
  }