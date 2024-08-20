import { extendTailwindMerge } from "tailwind-merge";
import { cx, type CxOptions } from "class-variance-authority";

const twMerge = extendTailwindMerge({
  prefix: "cr-",
});

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}
