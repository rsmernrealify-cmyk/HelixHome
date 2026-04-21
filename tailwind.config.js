/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
    
        spin:"spin 2s linear infinite",
      },
     

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
}
