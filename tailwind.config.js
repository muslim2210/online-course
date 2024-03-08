/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#2F327D",
        secondary: "#F48C06",
        subColor: "#696984",
        "slate-gray": "#6D6D6D",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/bg-heroNew.svg')",
        wave: "url('assets/images/bg-wave.svg')",
        ellips: "url('assets/icons/ellips-orange.svg')",
        ellipsMini: "url('assets/icons/Ellips-mini.png')",
      },
    },
  },
  plugins: [],
};
