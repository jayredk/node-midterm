module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        l: '900px',
      }
    },
    fontFamily: {
      'paytone': ['Paytone One', 'sans-serif'],
      'azeret': ['"Azeret Mono"', 'monospace'],
      'noto': ['Noto Sans TC', 'sans-serif']
    },
    extend: {
      colors: {
        'c-blue': '#03438D',
        'c-yellow': '#EEC32A',
        'c-blue-100': '#E2EDFA',
        'c-gray': '#9B9893',
        'c-red': '#F57375',
        'cd-red': '#DE4B63',
        'cd-yellow': '#FAA722',
        'cd-green': '#83C51D'
      },
    }
  },
  plugins: [],
}
