import { cva } from "class-variance-authority";

export const textareaCva = cva(
  [
    "cr-w-full cr-appearance-none cr-rounded-md cr-border-0.5 cr-border-black-000 cr-bg-white cr-py-3 cr-text-xl cr-font-medium cr-leading-7 cr-text-black-000 placeholder:cr-text-black-700 disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-text-black-300 disabled:cr-shadow-black-300 disabled:placeholder:cr-text-black-300",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000",
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
