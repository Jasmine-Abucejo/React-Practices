/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
      },
    },
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
          "-webkit-text-stroke": "1px currentColor",
        },
      });
    },
  ],
};
