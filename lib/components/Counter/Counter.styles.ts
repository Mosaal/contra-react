import { cva } from "class-variance-authority";

export const counterContainerCva = cva(
  "contra-flex contra-flex-row contra-items-center contra-text-black",
  {
    variants: {
      variant: {
        normal: "contra-gap-x-3",
        contained:
          "contra-overflow-hidden contra-border-0.5 contra-border-black",
      },
      size: {
        small: "",
        normal: "",
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
        size: "normal",
        className: "contra-rounded-4",
      },
      {
        variant: "contained",
        size: "small",
        className: "contra-rounded-3",
      },
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
        className: "contra-border-black-300",
      },
      {
        variant: "contained",
        raised: true,
        disabled: true,
        className: "contra-shadow-black-300",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
      raised: false,
    },
  },
);

export const counterLabelCva = cva("contra-font-extrabold", {
  variants: {
    variant: {
      normal: "",
      contained:
        "contra-inline-flex contra-items-center contra-justify-center contra-self-stretch contra-bg-yellow",
    },
    size: {
      small: "",
      normal: "",
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
      className: "contra-min-w-12 contra-text-6 contra-leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className: "contra-min-w-7.5 contra-text-4.25 contra-leading-6",
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

export const counterLeftButtonCva = cva(
  "contra-outline-0.5 contra-z-0 contra-flex contra-items-center contra-justify-center contra-outline-offset-1 contra-outline-pink focus:contra-z-[1] focus:contra-outline disabled:contra-cursor-not-allowed",
  {
    variants: {
      variant: {
        normal:
          "contra-border-y-0.5 contra-border-l-0.5 contra-border-r-0.25 contra-border-black contra-bg-yellow disabled:contra-border-black-300 disabled:contra-bg-yellow-800",
        contained: "contra-bg-white",
      },
      size: {
        small: "",
        normal: "",
      },
      raised: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "normal",
        size: "normal",
        className: "contra-h-12 contra-w-12 contra-rounded-l-4",
      },
      {
        variant: "normal",
        size: "small",
        className: "contra-h-9 contra-w-8.5 contra-rounded-l-3",
      },
      {
        variant: "contained",
        size: "normal",
        className: "contra-py-2.5 contra-pl-2.25 contra-pr-2",
      },
      {
        variant: "contained",
        size: "small",
        className: "contra-px-1.5 contra-py-1.75",
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

export const counterRightButtonCva = cva(
  "contra-outline-0.5 contra-z-0 contra-flex contra-items-center contra-justify-center contra-outline-offset-1 contra-outline-pink focus:contra-z-[1] focus:contra-outline disabled:contra-cursor-not-allowed",
  {
    variants: {
      variant: {
        normal:
          "contra-border-y-0.5 contra-border-l-0.25 contra-border-r-0.5 contra-border-black contra-bg-yellow disabled:contra-border-black-300 disabled:contra-bg-yellow-800",
        contained: "contra-bg-white",
      },
      size: {
        small: "",
        normal: "",
      },
      raised: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "normal",
        size: "normal",
        className: "contra-h-12 contra-w-12 contra-rounded-r-4",
      },
      {
        variant: "normal",
        size: "small",
        className: "contra-h-9 contra-w-8.5 contra-rounded-r-3",
      },
      {
        variant: "contained",
        size: "normal",
        className: "contra-py-2.5 contra-pl-2 contra-pr-2.25",
      },
      {
        variant: "contained",
        size: "small",
        className: "contra-px-1.5 contra-py-1.75",
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

export const counterIconCva = cva("contra-stroke-4", {
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
