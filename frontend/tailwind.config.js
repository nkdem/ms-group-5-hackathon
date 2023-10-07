/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.(js|jsx|ts|tsx)", "./index.html"],
  theme: {
    extend: {
      "colors": {
        "primary": {
          '50': '#fcf8eb',
          '100': '#f7eece',
          '200': '#eeda99',
          '300': '#e5c264',
          '400': '#dfad40',
          '500': '#d6902a',
          '600': '#bd7022',
          '700': '#9e521f',
          '800': '#81411f',
          '900': '#6a361d',
          '950': '#3c1b0c',
        }
      },
    },
  },
  plugins: [],
}

