/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED6E0B",
        secondary1: "#C9D9EE",
        primaryBg: "#0A0A0A",
        primaryFg: "#282724",

        accent1:'',
        secondary2: "",
        accentBg1: "",
        accentFg1:"",

        accent2:'',
        secondary3: "",
        accentBg2: "",
        accentFg2:"",
        // "primary-content": "#0a0802",
        // "primary-dark": "#b29126",
        // "primary-light": "#ddc061",

        // "secondary-content": "#ffffff",
        // "secondary-dark": "#4b26b2",
        // "secondary-light": "#8161dd",
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
