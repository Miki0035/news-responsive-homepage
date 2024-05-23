/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
    offWhite: " hsl(36, 100%, 99%)",
      grayishBlue: "hsl(233, 8%, 79%)",
      darkGrayishBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
      softOrange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      InterRegular: ["InterRegular", "sans-serif"],
      sans: ["Inter", "InterRegular", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      light: "400",
      semiBold: "700",
      bold: "800"
    }
  },
  plugins: [],
}

