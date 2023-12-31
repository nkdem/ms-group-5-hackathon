/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.(js|jsx|ts|tsx)", "./index.html"],
  darkMode: 'class', // enable dark mode,
  theme: {
    extend: {
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fcf8eb",
          100: "#f7eece",
          200: "#eeda99",
          300: "#e5c264",
          400: "#dfad40",
          500: "#d6902a",
          600: "#bd7022",
          700: "#9e521f",
          800: "#81411f",
          900: "#6a361d",
          950: "#3c1b0c",
        },
        secondary: {
          50: "#edfcf6",
          100: "#d2f9e9",
          200: "#a9f1d7",
          300: "#72e3c0",
          400: "#39cea6",
          500: "#15b48e",
          600: "#0ba785", // allyana's colour
          700: "#08745f",
          800: "#095c4d",
          900: "#084c40",
          950: "#032b25",
        },
        accent: {
          // pinkish
          50: "#fff0fb",
          100: "#ffe3f9",
          200: "#ffc6f3",
          300: "#ff98e6",
          400: "#ff58d3",
          500: "#ff27bd",
          600: "#f20094", // allyana's color
          700: "#df007c",
          800: "#b80067",
          900: "#980358",
          950: "#5f0031",
        },
        accent2: {
          // orange
          50: "#fffaea",
          100: "#fff1c5",
          200: "#ffe187",
          300: "#ffcc48",
          400: "#ffb51e",
          500: "#fc9307", // allyana's colour
          600: "#df6a00",
          700: "#b94804",
          800: "#96370a",
          900: "#7b2e0c",
          950: "#471501",
        },

        accent3: {
          // purple ish
          50: "#f6f3ff",
          100: "#efe9fe",
          200: "#e1d6fe",
          300: "#cbb6fc",
          400: "#b28cf9",
          500: "#9a5ef4",
          600: "#8e3ceb",
          700: "#8434d9", // allyana's colour
          800: "#6923b4",
          900: "#571e94",
          950: "#361164",
        },

        accent4: {
          // blue
          50: "#effaff",
          100: "#daf3ff",
          200: "#beebff",
          300: "#91e1ff",
          400: "#5dcdfd",
          500: "#37b2fa",
          600: "#2d9bf0", // allyana's colour
          700: "#197ddc",
          800: "#1b64b2",
          900: "#1c558c",
          950: "#163455",
        },

        accent5: {
          // green
          50: "#f4fbea",
          100: "#e6f6d1",
          200: "#cdeea8",
          300: "#ace076",
          400: "#90d14f", // allyana's colour
          500: "#6eb52d",
          600: "#549020",
          700: "#416e1d",
          800: "#37581c",
          900: "#2f4b1c",
          950: "#16290a",
        },
      },
    },
  },
  plugins: [],
};
