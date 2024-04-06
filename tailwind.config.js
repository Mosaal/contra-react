const spacing = {};
for (let i = 0; i <= 640; i++) {
  const pixelToRem = i / 16;
  spacing[String(pixelToRem * 4)] = `${pixelToRem}rem`;
}

const colors = {
  transparent: "transparent",
  contra: {
    white: "#FFFFFF",
    blue: {
      100: "#E9E7FC",
      800: "#8094FF",
      DEFAULT: "#1947E5",
    },
    pink: {
      200: "#FFF3F8",
      800: "#FFC7DE",
      DEFAULT: "#FF89BB",
    },
    yellow: {
      100: "#FFF4CC",
      800: "#FFD465",
      DEFAULT: "#FFBD12",
    },
    green: {
      100: "#D6FCF7",
      800: "#61E4C5",
      DEFAULT: "#00C6AE",
    },
    red: {
      100: "#FFE8E8",
      800: "#FF9692",
      DEFAULT: "#F95A2C",
    },
    black: {
      100: "#F4F5F7",
      200: "#EEEFF4",
      300: "#9FA4B4",
      700: "#969BAB",
      800: "#474A57",
      DEFAULT: "#18191F",
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    spacing,
    fontSize: {
      ...spacing,
    },
    lineHeight: {
      ...spacing,
    },
    borderWidth: {
      ...spacing,
    },
    borderRadius: {
      ...spacing,
      full: "100%",
    },
    extend: {
      boxShadow: {
        "contra-button-small": `0 0.125rem 0 0 ${colors.contra.black.DEFAULT}`,
        "contra-button-normal": `0 0.25rem 0 0 ${colors.contra.black.DEFAULT}`,
      },
    },
  },
  plugins: [],
};
