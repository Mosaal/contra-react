import { cva } from "class-variance-authority";

export const progressBarWrapperCva = cva(
  "h-3 w-full overflow-hidden rounded-2.5 border-0.5 border-contra-black bg-transparent",
);

export const progressBarCva = cva("h-full bg-contra-yellow transition-[width]");
