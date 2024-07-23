import { extendTailwindMerge } from "tailwind-merge";
import { cx, type CxOptions } from "class-variance-authority";

const fontSize: string[] = [];
for (let i = 0; i <= 640; i++) {
  const pixelToRem = i / 16;
  fontSize.push(`contra-text-${String(pixelToRem * 4)}`);
}

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // This is necessary otherwise "contra-text-3" conflicts with "contra-text-white"
      // which can't happen because one sets the "contra-font-size" and the other the "color"
      "font-size": fontSize,
      shadow: ["contra-shadow-small", "contra-shadow-normal"],
    },
  },
});

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}
