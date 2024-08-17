import { extendTailwindMerge } from "tailwind-merge";
import { cx, type CxOptions } from "class-variance-authority";

const gap: string[] = [];
const fontSize: string[] = [];
for (let i = 0; i <= 640; i++) {
  const pixelToRem = i / 16;
  gap.push(`cr-gap-${String(pixelToRem * 4)}`);
  fontSize.push(`cr-text-${String(pixelToRem * 4)}`);
}

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // This is necessary otherwise "cr-text-3" conflicts with "cr-text-white"
      // which can't happen because one sets the "font-size" and the other the "color"
      gap: gap,
      "font-size": fontSize,
      shadow: ["cr-shadow-small", "cr-shadow-normal"],
    },
  },
});

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}
