/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ensure this matches your project
  ],
  theme: {
    extend: {},
    fontSize: {
      base: "18px", // set new base font size
      sm: "14px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
    },
  },
  plugins: [],
}
