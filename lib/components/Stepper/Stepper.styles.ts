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
    },
    defaultVariants: {
      variant: "normal",
      size: "normal",
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
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});

export const stepperButtonCva = cva("flex items-center justify-center", {
  variants: {
    variant: {
      normal: "border-0.5 border-contra-black bg-contra-yellow",
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
  ],
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});
