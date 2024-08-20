import { cva } from "class-variance-authority";

export const stepperContainerCva = cva(
  "cr-text-black-000 cr-flex cr-flex-row cr-items-center",
  {
    variants: {
      variant: {
        normal: "cr-gap-x-3",
        contained: "cr-border-black-000 cr-border-0.5",
      },
      size: {
        small: "cr-rounded-xs",
        normal: "cr-rounded-md",
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
      contained: "cr-bg-yellow-000",
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
      className: "cr-text-5xl cr-leading-10",
    },
    {
      variant: "normal",
      size: "small",
      className: "cr-text-3xl cr-leading-7",
    },
    {
      variant: "contained",
      size: "normal",
      className: "cr-text-3xl cr-py-2 cr-pl-5.5 cr-pr-3.5 cr-leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className: "cr-text-lg cr-py-1 cr-pl-3.25 cr-pr-2.25 cr-leading-6",
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
    "focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000 cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all",
  ],
  {
    variants: {
      variant: {
        normal:
          "cr-border-black-000 cr-bg-yellow-000 cr-border-0.5 disabled:cr-border-black-300 disabled:cr-bg-yellow-800",
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
        className: "cr-rounded-md cr-h-12 cr-w-12",
      },
      {
        variant: "normal",
        size: "small",
        className: "cr-rounded-xs cr-h-9 cr-w-9",
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
