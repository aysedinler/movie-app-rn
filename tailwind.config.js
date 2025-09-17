/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/global.css',
  ],
  // ✨ BUNU EKLE
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:
      {
        primary: "#151312",   // siyah ton
        secondary: "#6b7280", // gri ton
      },
    },
  },
  plugins: [],
};

