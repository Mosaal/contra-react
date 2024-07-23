import { cva } from "class-variance-authority";

export const textareaCva = cva(
  "contra-outline-0.5 contra-w-full contra-appearance-none contra-rounded-4 contra-border-0.5 contra-border-black contra-bg-white contra-py-3 contra-text-5.25 contra-font-medium contra-leading-7 contra-text-black contra-outline-offset-1 contra-outline-pink placeholder:contra-text-black-700 focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-border-black-300 disabled:contra-text-black-300 disabled:contra-shadow-black-300 disabled:placeholder:contra-text-black-300",
  {
    variants: {
      raised: {
        true: "contra-shadow-normal",
        false: "contra-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);

export const textareaIconCva = cva("contra-absolute contra-top-4", {
  variants: {
    position: {
      left: "contra-left-4",
      right: "contra-right-4",
    },
    disabled: {
      true: "contra-pointer-events-none contra-text-black-300",
      false: "contra-text-black",
    },
    clickable: {
      false: "contra-pointer-events-none",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      clickable: true,
      className: "contra-pointer-events-auto contra-cursor-pointer",
    },
  ],
  defaultVariants: {
    position: "left",
    disabled: false,
    clickable: false,
  },
});
