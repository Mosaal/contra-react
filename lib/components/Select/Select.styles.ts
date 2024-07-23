import { cva } from "class-variance-authority";

export const selectCva = cva(
  "contra-outline-0.5 contra-w-full contra-appearance-none contra-rounded-4 contra-border-0.5 contra-border-black contra-bg-white contra-py-3 contra-pr-13.5 contra-text-5.25 contra-font-medium contra-leading-7 contra-text-black contra-outline-offset-1 contra-outline-pink focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-border-black-300 disabled:contra-text-black-300 disabled:contra-shadow-black-300",
  {
    variants: {
      raised: {
        true: "contra-shadow-normal",
        false: "contra-shadow-none",
      },
      placeholder: {
        true: "contra-text-black-700",
      },
    },
    defaultVariants: {
      raised: false,
      placeholder: false,
    },
  },
);

export const selectIconCva = cva(
  "contra-absolute contra-left-4 contra-top-1/2 -contra-translate-y-1/2",
  {
    variants: {
      disabled: {
        true: "contra-text-black-300",
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
      disabled: false,
      clickable: false,
    },
  },
);

export const selectChevronWrapperCva = cva(
  "contra-pointer-events-none contra-absolute contra-bottom-0 contra-right-0.5 contra-top-0.5 contra-flex contra-h-13 contra-w-10.5 contra-items-center contra-justify-center contra-rounded-r-3.5",
  {
    variants: {
      disabled: {
        true: "contra-bg-yellow-100",
        false: "contra-bg-yellow",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const selectChevronIconCva = cva("contra-stroke-3", {
  variants: {
    disabled: {
      true: "contra-text-black-300",
      false: "contra-text-black",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
