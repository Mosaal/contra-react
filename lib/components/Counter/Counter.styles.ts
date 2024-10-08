import { cva } from "class-variance-authority";

export const counterContainerCva = cva(
  "cr-flex cr-flex-row cr-items-center cr-text-black-000",
  {
    variants: {
      variant: {
        normal: "cr-gap-x-3",
        contained: "cr-overflow-hidden cr-border-0.5 cr-border-black-000",
      },
      size: {
        small: "",
        normal: "",
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
        size: "normal",
        className: "cr-rounded-md",
      },
      {
        variant: "contained",
        size: "small",
        className: "cr-rounded-xs",
      },
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
        className: "cr-border-black-300",
      },
      {
        variant: "contained",
        raised: true,
        disabled: true,
        className: "cr-shadow-black-300",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
      raised: false,
    },
  },
);

export const counterLabelCva = cva("cr-font-extrabold", {
  variants: {
    variant: {
      normal: "",
      contained:
        "cr-inline-flex cr-items-center cr-justify-center cr-self-stretch cr-bg-yellow-000",
    },
    size: {
      small: "",
      normal: "",
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
      className: "cr-min-w-12 cr-text-3xl cr-leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className: "cr-min-w-7.5 cr-text-lg cr-leading-6",
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

export const counterLeftButtonCva = cva(
  [
    "cr-z-0 cr-flex cr-items-center cr-justify-center focus:cr-z-[1] disabled:cr-cursor-not-allowed",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000",
  ],
  {
    variants: {
      variant: {
        normal:
          "cr-border-y-0.5 cr-border-l-0.5 cr-border-r-0.25 cr-border-black-000 cr-bg-yellow-000 disabled:cr-border-black-300 disabled:cr-bg-yellow-800",
        contained: "cr-bg-white",
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
        className: "cr-h-12 cr-w-12 cr-rounded-l-md",
      },
      {
        variant: "normal",
        size: "small",
        className: "cr-h-9 cr-w-8.5 cr-rounded-l-xs",
      },
      {
        variant: "contained",
        size: "normal",
        className: "cr-py-2.5 cr-pl-2.25 cr-pr-2",
      },
      {
        variant: "contained",
        size: "small",
        className: "cr-px-1.5 cr-py-1.75",
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

export const counterRightButtonCva = cva(
  [
    "cr-z-0 cr-flex cr-items-center cr-justify-center focus:cr-z-[1] disabled:cr-cursor-not-allowed",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000",
  ],
  {
    variants: {
      variant: {
        normal:
          "cr-border-y-0.5 cr-border-l-0.25 cr-border-r-0.5 cr-border-black-000 cr-bg-yellow-000 disabled:cr-border-black-300 disabled:cr-bg-yellow-800",
        contained: "cr-bg-white",
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
        className: "cr-h-12 cr-w-12 cr-rounded-r-md",
      },
      {
        variant: "normal",
        size: "small",
        className: "cr-h-9 cr-w-8.5 cr-rounded-r-xs",
      },
      {
        variant: "contained",
        size: "normal",
        className: "cr-py-2.5 cr-pl-2 cr-pr-2.25",
      },
      {
        variant: "contained",
        size: "small",
        className: "cr-px-1.5 cr-py-1.75",
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

export const counterIconCva = cva("cr-stroke-4", {
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
