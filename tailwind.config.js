/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6A9C89",
        secondary: "#C1D8C3",
        background: "#FFA725",
        text: "#FFF5E4",
      },
      fontFamily: {
        knewave: ["Knewave", "system-ui"],
      },
    },
  },
  plugins: [],
};
