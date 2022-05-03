module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      esm: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // screens: {
      //   em: "435px",
      // },

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
