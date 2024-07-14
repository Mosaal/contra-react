import { cva } from "class-variance-authority";

export const stepperContainerCva = cva(
  "flex flex-row items-center text-contra-black",
  {
    variants: {
      variant: {
        normal: "gap-x-3",
        contained: "overflow-hidden border-0.5 border-contra-black",
      },
      size: {
        small: "rounded-3",
        normal: "rounded-4",
      },
      raised: {
        true: "",
      },
      disabled: {
        true: "cursor-not-allowed text-contra-black-300",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        raised: true,
        className: "shadow-contra-small",
      },
      {
        variant: "contained",
        raised: false,
        className: "shadow-none",
      },
      {
        variant: "contained",
        disabled: true,
        className: "border-contra-black-300 shadow-contra-black-300",
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

export const stepperLabelCva = cva("font-extrabold", {
  variants: {
    variant: {
      normal: "",
      contained: "bg-contra-yellow",
    },
    size: {
      small: "",
      normal: "",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      variant: "normal",
      size: "normal",
      className: "text-9 leading-10",
    },
    {
      variant: "normal",
      size: "small",
      className: "text-6 leading-7",
    },
    {
      variant: "contained",
      size: "normal",
      className: "py-2 pl-5.5 pr-3.5 text-6 leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className: "py-1 pl-3.25 pr-2.25 text-4.25 leading-6",
    },
    {
      variant: "contained",
      disabled: true,
      className: "bg-contra-yellow-800",
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
    disabled: false,
  },
});

export const stepperButtonCva = cva(
  "flex items-center justify-center disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        normal:
          "border-0.5 border-contra-black bg-contra-yellow disabled:border-contra-black-300 disabled:bg-contra-yellow-800",
        contained: "bg-contra-white",
      },
      size: {
        small: "",
        normal: "",
      },
      raised: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "normal",
        size: "normal",
        className: "h-12 w-12 rounded-4",
      },
      {
        variant: "normal",
        size: "small",
        className: "h-9 w-9 rounded-3",
      },
      {
        variant: "contained",
        size: "normal",
        className: "py-2.5 pl-2 pr-2.5",
      },
      {
        variant: "contained",
        size: "small",
        className: "py-1.75 pl-1.25 pr-1.75",
      },
      {
        variant: "normal",
        raised: true,
        className: "shadow-contra-small disabled:shadow-contra-black-300",
      },
      {
        variant: "normal",
        raised: false,
        className: "shadow-none",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
      raised: false,
    },
  },
);

export const stepperIconCva = cva("stroke-4", {
  variants: {
    size: {
      small: "h-4.5 w-4.5",
      normal: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});
