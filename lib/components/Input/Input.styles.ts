import { cva } from "class-variance-authority";

export const inputCva = cva(
  "appearance-none rounded-4 border-0.5 border-contra-black bg-contra-white py-3 text-5.25 font-medium leading-7 text-contra-black placeholder:text-contra-black-700 disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:text-contra-black-300 disabled:placeholder:text-contra-black-300",
);

export const inputIconCva = cva("absolute top-1/2 -translate-y-1/2", {
  variants: {
    position: {
      left: "left-4",
      right: "right-4",
    },
    disabled: {
      true: "text-contra-black-300",
      false: "text-contra-black",
    },
    clickable: {
      false: "pointer-events-none",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      clickable: true,
      className: "pointer-events-auto cursor-pointer",
    },
  ],
  defaultVariants: {
    position: "left",
    disabled: false,
    clickable: false,
  },
});
