/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poiretfont':['Poiret One','sans-serif'],
        'monsfont':['Montserrat','sans-serif'],
      },
      colors: {
        'customdarkgreen':'#1A4D2E',
        'customgreen':'#4F6F52',
        'customoffwhite':'#E8DFCA',
        'customwhite':'#F5EFE6',
      },
      backgroundImage: {
        'hero-texture' :'url("https://www.transparenttextures.com/patterns/flowers.png")',
        
      }
    },
  },
  plugins: [],
};
