const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "0.25": "1px", // Dodaj niestandardową wysokość
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "30px",
      },
      colors: {
        // Primary Colors
        primary: {
          darkest: "#010d0d",
          dark: "#03624C",
          base: "#2CC295",
          light: "#00DF81",
          white: "#F1F7F6",
        },
        // Secondary Colors
        secondary: {
          darkest: "#06302B",
          dark: "#0B453A",
          base: "#095544",
          light: "#17876D",
          lightest: "#2FA98C",
          gray: "#707D7D",
          grayLight: "#AACBC4",
        },
      },
    },
  },
};
