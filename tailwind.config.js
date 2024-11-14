/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc300",
        secondary: "#1A1A1A",
        accent: "#343a40",
      },
    },
  },
  plugins: [],
};
