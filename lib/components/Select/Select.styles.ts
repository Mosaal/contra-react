import { cva } from "class-variance-authority";

export const selectCva = cva(
  "w-full appearance-none rounded-4 border-0.5 border-contra-black bg-contra-white py-3 pr-13.5 text-5.25 font-medium leading-7 text-contra-black outline-2 outline-offset-4 outline-contra-pink focus:outline disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:text-contra-black-300 disabled:shadow-contra-black-300",
  {
    variants: {
      raised: {
        true: "shadow-contra-normal",
        false: "shadow-none",
      },
      placeholder: {
        true: "text-contra-black-700",
      },
    },
    defaultVariants: {
      raised: false,
      placeholder: false,
    },
  },
);

export const selectIconCva = cva("absolute left-4 top-1/2 -translate-y-1/2", {
  variants: {
    disabled: {
      true: "text-contra-black-300",
      false: "text-contra-black",
    },
    clickable: {
      false: "pointer-events-none",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      clickable: true,
      className: "pointer-events-auto cursor-pointer",
    },
  ],
  defaultVariants: {
    disabled: false,
    clickable: false,
  },
});

export const selectChevronWrapperCva = cva(
  "pointer-events-none absolute bottom-0 right-0.5 top-0.5 flex h-13 w-10.5 items-center justify-center rounded-r-3.5",
  {
    variants: {
      disabled: {
        true: "bg-contra-yellow-100",
        false: "bg-contra-yellow",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const selectChevronIconCva = cva("stroke-3", {
  variants: {
    disabled: {
      true: "text-contra-black-300",
      false: "text-contra-black",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
