import { cva } from "class-variance-authority";

export const stepperContainerCva = cva(
  "contra-flex contra-flex-row contra-items-center contra-text-black",
  {
    variants: {
      variant: {
        normal: "contra-gap-x-3",
        contained: "contra-border-0.5 contra-border-black",
      },
      size: {
        small: "contra-rounded-3",
        normal: "contra-rounded-4",
      },
      raised: {
        true: "",
      },
      disabled: {
        true: "contra-cursor-not-allowed contra-text-black-300",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        raised: true,
        className: "contra-shadow-small",
      },
      {
        variant: "contained",
        raised: false,
        className: "contra-shadow-none",
      },
      {
        variant: "contained",
        disabled: true,
        className: "contra-border-black-300 contra-shadow-black-300",
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

export const stepperLabelCva = cva("contra-font-extrabold", {
  variants: {
    variant: {
      normal: "",
      contained: "contra-bg-yellow",
    },
    size: {
      small: "contra-rounded-l-2.5",
      normal: "contra-rounded-l-3.5",
    },
    disabled: {
      true: "contra-cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      variant: "normal",
      size: "normal",
      className: "contra-text-9 contra-leading-10",
    },
    {
      variant: "normal",
      size: "small",
      className: "contra-text-6 contra-leading-7",
    },
    {
      variant: "contained",
      size: "normal",
      className:
        "contra-py-2 contra-pl-5.5 contra-pr-3.5 contra-text-6 contra-leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className:
        "contra-py-1 contra-pl-3.25 contra-pr-2.25 contra-text-4.25 contra-leading-6",
    },
    {
      variant: "contained",
      disabled: true,
      className: "contra-bg-yellow-800",
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
    disabled: false,
  },
});

export const stepperButtonCva = cva(
  "contra-outline-0.5 contra-flex contra-items-center contra-justify-center contra-outline-offset-1 contra-outline-pink focus:contra-outline disabled:contra-cursor-not-allowed",
  {
    variants: {
      variant: {
        normal:
          "contra-border-0.5 contra-border-black contra-bg-yellow disabled:contra-border-black-300 disabled:contra-bg-yellow-800",
        contained: "contra-bg-white",
      },
      size: {
        small: "contra-rounded-r-2.5",
        normal: "contra-rounded-r-3.5",
      },
      raised: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "normal",
        size: "normal",
        className: "contra-h-12 contra-w-12 contra-rounded-4",
      },
      {
        variant: "normal",
        size: "small",
        className: "contra-h-9 contra-w-9 contra-rounded-3",
      },
      {
        variant: "contained",
        size: "normal",
        className: "contra-py-2.5 contra-pl-2 contra-pr-2.5",
      },
      {
        variant: "contained",
        size: "small",
        className: "contra-py-1.75 contra-pl-1.25 contra-pr-1.75",
      },
      {
        variant: "normal",
        raised: true,
        className: "contra-shadow-small disabled:contra-shadow-black-300",
      },
      {
        variant: "normal",
        raised: false,
        className: "contra-shadow-none",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
      raised: false,
    },
  },
);

export const stepperIconCva = cva("contra-stroke-4", {
  variants: {
    size: {
      small: "contra-h-4.5 contra-w-4.5",
      normal: "contra-h-6 contra-w-6",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});
