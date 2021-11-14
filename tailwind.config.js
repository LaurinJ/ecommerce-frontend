module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   extend: {
    //     body12: ["Roboto"],
    //   },
    // },
    // screens: {
    //   sm: "576px",
    //   md: "768px",
    //   lg: "992px",
    //   xl: "1200px",
    // },
    // container: {
    //   screens: {
    //     sm: "540px",
    //     md: "720px",
    //     lg: "960px",
    //     xl: "1200px",
    //     "2xl": "1200px",
    //   },
    // },
    extend: {
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
