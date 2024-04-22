/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4af37",
        "primary-content": "#0a0802",
        "primary-dark": "#b29126",
        "primary-light": "#ddc061",

        secondary: "#6e37d4",
        "secondary-content": "#ffffff",
        "secondary-dark": "#5726b2",
        "secondary-light": "#8c61dd",

        background: "#f0f0f0",
        foreground: "#fbfbfb",
        border: "#dfdfdf",

        copy: "#262626",
        "copy-light": "#666666",
        "copy-lighter": "#8c8c8c",

        success: "#37d437",
        warning: "#d4d437",
        error: "#d43737",

        "success-content": "#020a02",
        "warning-content": "#0a0a02",
        "error-content": "#ffffff"
    },
    },
  },
  plugins: [],
}
