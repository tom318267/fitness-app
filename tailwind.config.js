module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      kaushan: ["Kaushan Script", "cursive"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      purple: "#BB7EBC",
      pink: "#fdd6fd",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
