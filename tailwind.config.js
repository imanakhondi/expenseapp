/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"rgba(99, 181, 175, 1)",
      },
      backgroundImage: {
        "groupimg": "url('./images/Group 38.png')",
      },
    },
  },
  plugins: [],
}

