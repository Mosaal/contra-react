import { useMemo } from "react";
import { extendTailwindMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const fontSize: string[] = [];
for (let i = 0; i <= 640; i++) {
  const pixelToRem = i / 16;
  fontSize.push(`text-${String(pixelToRem * 4)}`);
}

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // This is necessary otherwise "text-3" conflicts with "text-contra-white"
      // which can't happen because one sets the "font-size" and the other the "color"
      "font-size": fontSize,
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useCn(...inputs: ClassValue[]) {
  return useMemo(() => cn(inputs), [inputs]);
}
