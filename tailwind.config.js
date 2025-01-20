/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke-black": {
          "-webkit-text-stroke": "1px black",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "1px white",
        },
        ".text-stroke": {
          "-webkit-text-stroke": "1px currentColor", // Uses the current text color
        },
      });
    },
  ],
};
