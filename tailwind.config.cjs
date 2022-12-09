/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'code': ['Comic Mono']
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}
