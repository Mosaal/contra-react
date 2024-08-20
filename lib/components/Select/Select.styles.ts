import { cva } from "class-variance-authority";

export const selectCva = cva(
  [
    "cr-border-black-000 cr-text-black-000 cr-text-xl cr-rounded-md cr-w-full cr-appearance-none cr-border-0.5 cr-bg-white cr-py-3 cr-pr-13.5 cr-font-medium cr-leading-7 disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-text-black-300 disabled:cr-shadow-black-300",
    "focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000 cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all",
  ],
  {
    variants: {
      raised: {
        true: "cr-shadow-normal",
        false: "cr-shadow-none",
      },
      placeholder: {
        true: "cr-text-black-700",
      },
    },
    defaultVariants: {
      raised: false,
      placeholder: false,
    },
  },
);

export const selectIconCva = cva(
  "cr-absolute cr-left-4 cr-top-1/2 -cr-translate-y-1/2",
  {
    variants: {
      disabled: {
        true: "cr-text-black-300",
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
      disabled: false,
      clickable: false,
    },
  },
);

export const selectChevronWrapperCva = cva(
  "cr-pointer-events-none cr-absolute cr-bottom-0 cr-right-0.5 cr-top-0.5 cr-flex cr-h-13 cr-w-10.5 cr-items-center cr-justify-center cr-rounded-r-3.5",
  {
    variants: {
      disabled: {
        true: "cr-bg-yellow-100",
        false: "cr-bg-yellow-000",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const selectChevronIconCva = cva("cr-stroke-3", {
  variants: {
    disabled: {
      true: "cr-text-black-300",
      false: "cr-text-black-000",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
