/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#5b281d",
        primary: "#5b281d",
        secondary: "#eee9e8",
      },
      fontFamily: {
        padauk: ["Padauk", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
