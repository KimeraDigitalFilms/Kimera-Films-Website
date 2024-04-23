/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d4af37",
        "primary-content": "#0a0802",
        "primary-dark": "#b29126",
        "primary-light": "#ddc061",

        secondary: "#6037d4",
        "secondary-content": "#ffffff",
        "secondary-dark": "#4b26b2",
        "secondary-light": "#8161dd",

        background: "#1b1a18",
        foreground: "#282724",
        border: "#43413d",

        copy: "#fbfbfb",
        "copy-light": "#dbdad7",
        "copy-lighter": "#aaa8a1",

        success: "#37d437",
        warning: "#d4d437",
        error: "#d43737",

        "success-content": "#020a02",
        "warning-content": "#0a0a02",
        "error-content": "#ffffff",
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
