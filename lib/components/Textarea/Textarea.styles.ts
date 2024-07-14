import { cva } from "class-variance-authority";

export const textareaCva = cva(
  "w-full appearance-none rounded-4 border-0.5 border-contra-black bg-contra-white py-3 text-5.25 font-medium leading-7 text-contra-black outline-2 outline-offset-4 outline-contra-pink placeholder:text-contra-black-700 focus:outline disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:text-contra-black-300 disabled:shadow-contra-black-300 disabled:placeholder:text-contra-black-300",
  {
    variants: {
      raised: {
        true: "shadow-contra-normal",
        false: "shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);

export const textareaIconCva = cva("absolute top-4", {
  variants: {
    position: {
      left: "left-4",
      right: "right-4",
    },
    disabled: {
      true: "pointer-events-none text-contra-black-300",
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
    position: "left",
    disabled: false,
    clickable: false,
  },
});
