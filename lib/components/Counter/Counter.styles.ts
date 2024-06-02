import { cva } from "class-variance-authority";

export const counterContainerCva = cva(
  "flex flex-row items-center text-contra-black",
  {
    variants: {
      variant: {
        normal: "gap-x-3",
        contained: "overflow-hidden border-0.5 border-contra-black",
      },
      size: {
        small: "",
        normal: "",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        size: "normal",
        className: "rounded-4",
      },
      {
        variant: "contained",
        size: "small",
        className: "rounded-3",
      },
    ],
    defaultVariants: {
      variant: "normal",
      size: "normal",
    },
  },
);

export const counterLabelCva = cva("font-extrabold", {
  variants: {
    variant: {
      normal: "",
      contained:
        "inline-flex items-center justify-center self-stretch bg-contra-yellow",
    },
    size: {
      small: "",
      normal: "",
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
      className: "min-w-12 text-6 leading-7",
    },
    {
      variant: "contained",
      size: "small",
      className: "min-w-7.5 text-4.25 leading-6",
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});

export const counterLeftButtonCva = cva("flex items-center justify-center", {
  variants: {
    variant: {
      normal:
        "border-y-0.5 border-l-0.5 border-r-0.25 border-contra-black bg-contra-yellow",
      contained: "bg-contra-white",
    },
    size: {
      small: "",
      normal: "",
    },
  },
  compoundVariants: [
    {
      variant: "normal",
      size: "normal",
      className: "h-12 w-12 rounded-l-4",
    },
    {
      variant: "normal",
      size: "small",
      className: "h-9 w-8.5 rounded-l-3",
    },
    {
      variant: "contained",
      size: "normal",
      className: "py-2.5 pl-2.25 pr-2",
    },
    {
      variant: "contained",
      size: "small",
      className: "px-1.5 py-1.75",
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});

export const counterRightButtonCva = cva("flex items-center justify-center", {
  variants: {
    variant: {
      normal:
        "border-y-0.5 border-l-0.25 border-r-0.5 border-contra-black bg-contra-yellow",
      contained: "bg-contra-white",
    },
    size: {
      small: "",
      normal: "",
    },
  },
  compoundVariants: [
    {
      variant: "normal",
      size: "normal",
      className: "h-12 w-12 rounded-r-4",
    },
    {
      variant: "normal",
      size: "small",
      className: "h-9 w-8.5 rounded-r-3",
    },
    {
      variant: "contained",
      size: "normal",
      className: "py-2.5 pl-2 pr-2.25",
    },
    {
      variant: "contained",
      size: "small",
      className: "px-1.5 py-1.75",
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});

export const counterIconCva = cva("stroke-4", {
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
