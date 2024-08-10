import { cva } from "class-variance-authority";

export const stepperContainerCva = cva(
  "cr-flex cr-flex-row cr-items-center cr-text-black",
  {
    variants: {
      variant: {
        normal: "cr-gap-x-3",
        contained: "cr-border-0.5 cr-border-black",
      },
      size: {
        small: "cr-rounded-3",
        normal: "cr-rounded-4",
      },
      raised: {
        true: "",
      },
      disabled: {
        true: "cr-cursor-not-allowed cr-text-black-300",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        raised: true,
        className: "cr-shadow-small",
      },
      {
        variant: "contained",
        raised: false,
        className: "cr-shadow-none",
      },
      {
        variant: "contained",
        disabled: true,
        className: "cr-border-black-300 cr-shadow-black-300",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
      raised: false,
      disabled: false,
    },
  },
);

export const stepperLabelCva = cva("cr-font-extrabold", {
  variants: {
    variant: {
      normal: "",
      contained: "cr-bg-yellow",
    },
    size: {
      small: "cr-rounded-l-2.5",
      normal: "cr-rounded-l-3.5",
    },
    disabled: {
      true: "cr-cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      variant: "normal",
      size: "normal",
      className: "cr-text-9 cr-leading-10",
    },
    {
      variant: "normal",
      size: "small",
      className: "cr-text-6 cr-leading-7",
    },
    {
      variant: "contained",
      size: "normal",
      className: "cr-py-2 cr-pl-5.5 cr-pr-3.5 cr-text-6 cr-leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className: "cr-py-1 cr-pl-3.25 cr-pr-2.25 cr-text-4.25 cr-leading-6",
    },
    {
      variant: "contained",
      disabled: true,
      className: "cr-bg-yellow-800",
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
    disabled: false,
  },
});

export const stepperButtonCva = cva(
  [
    "cr-flex cr-items-center cr-justify-center disabled:cr-cursor-not-allowed",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink focus-visible:cr-outline-pink",
  ],
  {
    variants: {
      variant: {
        normal:
          "cr-border-0.5 cr-border-black cr-bg-yellow disabled:cr-border-black-300 disabled:cr-bg-yellow-800",
        contained: "cr-bg-white",
      },
      size: {
        small: "cr-rounded-r-2.5",
        normal: "cr-rounded-r-3.5",
      },
      raised: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "normal",
        size: "normal",
        className: "cr-h-12 cr-w-12 cr-rounded-4",
      },
      {
        variant: "normal",
        size: "small",
        className: "cr-h-9 cr-w-9 cr-rounded-3",
      },
      {
        variant: "contained",
        size: "normal",
        className: "cr-py-2.5 cr-pl-2 cr-pr-2.5",
      },
      {
        variant: "contained",
        size: "small",
        className: "cr-py-1.75 cr-pl-1.25 cr-pr-1.75",
      },
      {
        variant: "normal",
        raised: true,
        className: "cr-shadow-small disabled:cr-shadow-black-300",
      },
      {
        variant: "normal",
        raised: false,
        className: "cr-shadow-none",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
      raised: false,
    },
  },
);

export const stepperIconCva = cva("cr-stroke-4", {
  variants: {
    size: {
      small: "cr-h-4.5 cr-w-4.5",
      normal: "cr-h-6 cr-w-6",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});
