module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {

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

    plugins: [],
  }