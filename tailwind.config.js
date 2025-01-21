/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {},
    colors: {
      brand: "#553E34",
      common: "#000000",
      def: "#ffffff",
      second: "#CDC7AF",
    },
    fontSize: {
      default: "1rem",
      control: "1.1rem",
    },
    lineHeight: {
      default: "1",
      control: "1.2",
      text: "1.25",
    },
    boxShadow: {
      button: "inset 0 4px #CDC8B0, 0 6px 0 rgba(0, 0, 0, 0.38)",
    },
  },
  plugins: [],
};
