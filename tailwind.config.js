/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-app-purple",
    "bg-app-pink",
    "bg-app-yellow-primary",
    "bg-app-yellow-secondary",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Inter", "sans-serif"],
      },
      fontSize: {
        "home-heading": ["4rem", "4.8rem"],
        // font-size: 64px, line-height: 76.8px
        h1: ["3.5rem", "4.2rem"],
        // font-size: 56px, line-height: 67.2px
        h2: ["3rem", "3.6rem"],
        // font-size: 48px, line-height: 57.6px,
        h3: ["1.75rem", "2.625rem"],
        // font-size: 28px, line-height: 42px
        h4: ["1.25rem", "1.875rem"],
        // font-size: 20px, line-height: 30px
        h5: ["0.875rem", "1.3125rem"],
        // font-size: 14px, line-height: 21px
        h6: ["0.75rem", "1.125rem"],
        // font-size: 12px, line-height: 18px
        paragraph: ["1rem", "1.6rem"],
        // font-size: 16px, line-height: 25.6px
        "paragraph-small": ["0.875rem", "1.4rem"],
        // font-size: 14px, line-height: 22.4px
        button: ["1rem", "1.171875rem"],
        // font-size: 16px, line-height: 18.75px
      },

      width: {
        "14/20": "70%",
        "17/20": "85%",
      },
      colors: {
        "app-green-primary": "#70C174",
        "app-green-secondary": "#BEF3C0",
        "app-green-tertiary": "#EFF7F2",
        "app-black": "#0B0706",
        "app-primary-text": "#1D2130",
        "app-secondary-text": "#525560",
        "app-off-white": "#EBF0F9",
        "app-border": "#E5E5E5",
        "app-purple": "#AC94F1",
        "app-pink": "#F38FBF",
        "app-yellow-primary": "#F9CF64",
        "app-yellow-secondary": "#FFF0CA",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "474px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
