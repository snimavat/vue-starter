const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  safelist: [
    {
      pattern: /bg-.*/,
    },
    {
      pattern: /text-.*/,
    },
  ],
  content: [],
  theme: {
    extend: {},
    colors: colors,
  },
  plugins: [],
};
