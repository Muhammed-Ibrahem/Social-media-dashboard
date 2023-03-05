/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brands: {
          facebook: "hsl(var(--facebook) / <alpha-value>)",
          twitter: "hsl(var(--twitter) / <alpha-value>)",
          youtube: "hsl(var(--youtube) / <alpha-value>)",
          instaFrom: "hsl(var(--instaFrom))",
          instaTo: "hsl(var(--instaTo))",
        },
        primary: {
          limeGreen: "hsl(var(--lime-green) / <alpha-value>)",
          brightRed: "hsl(var(--bright-red) / <alpha-value>)",
        },
        siteTheme: {
          bgDark: "hsl(var(--bg-dark) / <alpha-value>)",
          patternDark: "hsl(var(--bg-pattern-dark) / <alpha-value>)",
          bgCardDark: "hsl(var(--card-bg-dark) / <alpha-value>)",
          blueTextDark: "hsl(var(--text-blue-dark) / <alpha-value>)",
          whiteTextDark: "hsl(var(--text-white-dark) / <alpha-value>)",
          toggleDarkFrom: "hsl(var(--toggle-dark-from))",
          toggleDarkTo: "hsl(var(--toggle-dark-to))",
          bgWhite: "hsl(var(--bg-white) / <alpha-value>)",
          patternWhite: "hsl(var(--bg-pattern-white) / <alpha-value>)",
          bgCardWhite: "hsl(var(--card-bg-white )/ <alpha-value>)",
          grayishBlueTextWhite:
            "hsl(var(--text-grayishBlue-white) / <alpha-value>)",
          darkBlueTextWhite: "hsl(var(--text-darkBlue-white) / <alpha-value>)",
          toggleWhite: "hsl(var(--toggle-white) / <alpha-value>)",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
      fontSize: {
        cardHeading: "var(--card-heading-font-size)",
      },
    },
  },
  plugins: [],
};
