module.exports = {
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.jsx',
    './dist/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          550: '#FF794D',
        }
      },
      
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}