/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5b281d",
        secondary: "#eee9e8",
        btn: "#7d4739",
      },
      fontFamily: {
        padauk: ["Padauk", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
