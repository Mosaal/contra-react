import { cva } from "class-variance-authority";

export const textareaCva = cva(
  [
    "cr-border-black-000 cr-text-black-000 cr-text-xl cr-rounded-md cr-w-full cr-appearance-none cr-border-0.5 cr-bg-white cr-py-3 cr-font-medium cr-leading-7 placeholder:cr-text-black-700 disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-text-black-300 disabled:cr-shadow-black-300 disabled:placeholder:cr-text-black-300",
    "focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000 cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all",
  ],
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
      false: "cr-text-black-000",
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
