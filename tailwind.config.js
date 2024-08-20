const spacing = {};
for (let i = 0; i <= 430; i++) {
  const pixelToRem = i / 16;
  spacing[String(pixelToRem * 4)] = `${pixelToRem}rem`;
}

const colors = {
  transparent: "transparent",
  white: "var(--contra-white)",
  blue: {
    "000": "var(--contra-blue)",
    100: "var(--contra-blue-100)",
    800: "var(--contra-blue-800)",
  },
  pink: {
    "000": "var(--contra-pink)",
    200: "var(--contra-pink-200)",
    800: "var(--contra-pink-800)",
  },
  yellow: {
    "000": "var(--contra-yellow)",
    100: "var(--contra-yellow-100)",
    800: "var(--contra-yellow-800)",
  },
  green: {
    "000": "var(--contra-green)",
    100: "var(--contra-green-100)",
    800: "var(--contra-green-800)",
  },
  red: {
    "000": "var(--contra-red)",
    100: "var(--contra-red-100)",
    800: "var(--contra-red-800)",
  },
  black: {
    "000": "var(--contra-black)",
    100: "var(--contra-black-100)",
    200: "var(--contra-black-200)",
    300: "var(--contra-black-300)",
    700: "var(--contra-black-700)",
    800: "var(--contra-black-800)",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  prefix: "cr-",
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors,
    fontSize: {
      xs: "0.6875rem",
      sm: "0.75rem",
      md: "0.9375rem",
      lg: "1.0625rem",
      xl: "1.3125rem",
      "2xl": "1.375rem",
      "3xl": "1.5rem",
      "4xl": "1.6875rem",
      "5xl": "2.25rem",
    },
    borderRadius: {
      none: "0rem",
      "4xs": "0.375rem",
      "3xs": "0.5rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "1.625rem",
      "2xl": "1.875rem",
      "3xl": "2.75rem",
      "4xl": "3.25rem",
      full: "100%",
    },
    extend: {
      spacing,
      lineHeight: {
        5.5: "1.375rem",
      },
      outlineWidth: {
        0.5: "0.125rem",
      },
      outlineOffset: {
        1: "0.25rem",
      },
      ringWidth: {
        0.5: "0.125rem",
      },
      ringOffsetWidth: {
        2: "0.5rem",
      },
      borderWidth: {
        0.25: "0.0625rem",
        0.5: "0.125rem",
      },
      content: {
        "check-white": "var(--check-white)",
        "check-black": "var(--check-black)",
        "check-black-300": "var(--check-black-300)",
      },
      strokeWidth: {
        3: 3,
        4: 4,
      },
      boxShadow: {
        small: "0 0.125rem 0 0 var(--contra-black)",
        normal: "0 0.25rem 0 0 var(--contra-black)",
      },
    },
  },
  plugins: [],
};
