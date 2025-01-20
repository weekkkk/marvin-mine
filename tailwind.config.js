/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'olive': '#768F2B',
        'spruce': '#2C3805',
        'beige': '#CDC7AF',
      },
      boxShadow: {
        'inner-top': 'inset 0 2px 0 0 #C3BF5B',
        'inner-top-light': 'inset 0 2px 0 0 #CDC8B0',
      },
      dropShadow: {
        'outer-bottom': '0px 3px 0px #00000061'
      }
    },
  },
  plugins: [],
};
