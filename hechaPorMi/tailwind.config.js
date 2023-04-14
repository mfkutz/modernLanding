/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        martin: "#700FE4",
        footer:"#2E3E5C"
      }
    },
  },
  plugins: [],
}