export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
