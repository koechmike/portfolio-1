/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#68B2A0",
        darkGreen: "#2C6975",
        lightBackground: "#F8F8F8",
        darkBackground: "#22262D",
        darkBlack: "#000000",
        grayColor: "#22262D",
        yellowColor: "FFE033",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
