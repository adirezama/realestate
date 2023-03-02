/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        base: ["16px", "32px"],
        logo: ["32px", "32px"],
      },
      colors: {
        color1: "hsla(203, 57%, 97%, 1)",
        color2: "hsla(228, 6%, 17%, 1)",
        color3: "hsla(218, 54%, 30%, 1)",
        color4: "hsla(0, 0%, 100%, 1)",
      },
    },
  },
  plugins: [],
};
