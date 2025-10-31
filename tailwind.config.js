/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        accent: "#f59e0b",
        dark: "#0b1220"
      }
    }
  },
  plugins: []
}
