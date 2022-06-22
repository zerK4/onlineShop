/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      '1/2': '40rem'
    }
  },
  plugins: [],
}
