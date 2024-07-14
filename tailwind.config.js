const spacing = {};
for (let i = 0; i <= 640; i++) {
  const pixelToRem = i / 16;
  spacing[String(pixelToRem * 4)] = `${pixelToRem}rem`;
}

const colors = {
  transparent: "transparent",
  contra: {
    white: "var(--contra-white)",
    blue: {
      100: "var(--contra-blue-100)",
      800: "var(--contra-blue-800)",
      DEFAULT: "var(--contra-blue)",
    },
    pink: {
      200: "var(--contra-pink-200)",
      800: "var(--contra-pink-800)",
      DEFAULT: "var(--contra-pink)",
    },
    yellow: {
      100: "var(--contra-yellow-100)",
      800: "var(--contra-yellow-800)",
      DEFAULT: "var(--contra-yellow)",
    },
    green: {
      100: "var(--contra-green-100)",
      800: "var(--contra-green-800)",
      DEFAULT: "var(--contra-green)",
    },
    red: {
      100: "var(--contra-red-100)",
      800: "var(--contra-red-800)",
      DEFAULT: "var(--contra-red)",
    },
    black: {
      100: "var(--contra-black-100)",
      200: "var(--contra-black-200)",
      300: "var(--contra-black-300)",
      700: "var(--contra-black-700)",
      800: "var(--contra-black-800)",
      DEFAULT: "var(--contra-black)",
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  // prefix: "contra-",
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
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
      strokeWidth: {
        3: 3,
        4: 4,
      },
      boxShadow: {
        "contra-small": "0 0.125rem 0 0 var(--contra-black)",
        "contra-normal": "0 0.25rem 0 0 var(--contra-black)",
      },
    },
  },
  plugins: [],
};
