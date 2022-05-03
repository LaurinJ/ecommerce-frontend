module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        esm: "435px",
      },

      height: {
        calc: "calc(100% - 129px)",
      },

      backgroundColor: {
        primary: "#0050aa",
        lg_blue: "#f5f8fc",
      },

      textColor: {
        primary: "#0050aa",
      },

      width: {
        calc: "calc(100% - 300px)",
      },

      borderColor: {
        primary: "#0050aa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
