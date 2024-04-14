import { cva } from "class-variance-authority";

export const progressBarCva = cva(
  "h-3 w-full overflow-hidden rounded-2.5 border-0.5 bg-transparent",
  {
    variants: {
      raised: {
        true: "shadow-contra-button-small",
        false: "shadow-none",
      },
      disabled: {
        true: "border-contra-black-300",
        false: "border-contra-black",
      },
    },
    compoundVariants: [
      {
        raised: true,
        disabled: true,
        className: "shadow-contra-black-300",
      },
    ],
    defaultVariants: {
      raised: false,
      disabled: false,
    },
  },
);

export const progressBarFillerCva = cva("h-full transition-[width]", {
  variants: {
    disabled: {
      true: "bg-contra-yellow-100",
      false: "bg-contra-yellow",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
