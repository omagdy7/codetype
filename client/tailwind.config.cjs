/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'code': ['Comic Mono'],
      'mono': ['courier']
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}
