/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "sans-serif",
        ],
      },
      colors: {
        // Calming theme colors inspired by nature
        calm: {
          25: "#f7fbfa",
          50: "#f0f9f7",
          100: "#d4f0ea",
          200: "#a8e0d5",
          300: "#7ccfc0",
          400: "#50beab",
          500: "#42a691",
          600: "#358771",
          700: "#286851",
          800: "#1b4931",
          900: "#0e2a11",
        },
        sage: {
          25: "#fafbf9",
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d1d8c7",
          300: "#b9c4ab",
          400: "#a1b18f",
          500: "#8a9e73",
          600: "#6f7f5c",
          700: "#545f45",
          800: "#39402e",
          900: "#1e2017",
        },
        earth: {
          50: "#faf8f5",
          100: "#f0ebe0",
          200: "#e1d7c1",
          300: "#d2c3a2",
          400: "#c3af83",
          500: "#b49b64",
          600: "#907c50",
          700: "#6c5d3c",
          800: "#483e28",
          900: "#241f14",
        },
        mist: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#8e9aaf",
          600: "#6c7885",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant("calming", ".calming &");
    },
  ],
};
