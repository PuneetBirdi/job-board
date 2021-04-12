module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth:{
      '24': '24rem',
      '128': '128rem',
    },
    minHeight:{
      '12': '12rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
