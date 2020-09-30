module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
    ],
  },
  theme: {
    screens: {
      sm: "400px",
      md: "480px",
      lg: "560px",
      xl: "640px",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
