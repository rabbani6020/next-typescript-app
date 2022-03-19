const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066ff",
        primaryHover: "#003d99",
        secondary: "#f67280",
        secondaryHover: "#f0122a",
        title: "#111",
        body: "#565656",
      },
      theme: {
        fontSize: {
          xl: "1.25rem",
        },
        fontFamily: {
          title: ["Inter", ...defaultTheme.fontFamily.sans],
          body: ["Roboto", ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  plugins: [],
};
