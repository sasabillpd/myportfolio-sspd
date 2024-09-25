/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: { 
      colors: {
        primary: "#a78bfa",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        '2xl': '1320px', // Ukuran layar 2xl diperbaiki
      },
    },
  },
  plugins: [],
}
