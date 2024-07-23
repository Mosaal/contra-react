import { cva } from "class-variance-authority";

export const textareaCva = cva(
  "cr-outline-0.5 cr-w-full cr-appearance-none cr-rounded-4 cr-border-0.5 cr-border-black cr-bg-white cr-py-3 cr-text-5.25 cr-font-medium cr-leading-7 cr-text-black cr-outline-offset-1 cr-outline-pink placeholder:cr-text-black-700 focus:cr-outline disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-text-black-300 disabled:cr-shadow-black-300 disabled:placeholder:cr-text-black-300",
  {
    variants: {
      raised: {
        true: "cr-shadow-normal",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);

export const textareaIconCva = cva("cr-absolute cr-top-4", {
  variants: {
    position: {
      left: "cr-left-4",
      right: "cr-right-4",
    },
    disabled: {
      true: "cr-pointer-events-none cr-text-black-300",
      false: "cr-text-black",
    },
    clickable: {
      false: "cr-pointer-events-none",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      clickable: true,
      className: "cr-pointer-events-auto cr-cursor-pointer",
    },
  ],
  defaultVariants: {
    position: "left",
    disabled: false,
    clickable: false,
  },
});
