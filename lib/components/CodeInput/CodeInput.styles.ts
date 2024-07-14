import { cva } from "class-variance-authority";

export const codeInputCva = cva(
  "!inline-flex flex-row items-center gap-6 *:h-14 *:w-14 *:appearance-none *:rounded-4 *:border-0.5 *:border-contra-black *:!bg-contra-white *:text-center *:text-6 *:font-extrabold *:leading-7 *:text-contra-black *:outline-2 *:outline-offset-4 *:outline-contra-pink *:placeholder:text-contra-black-700 focus:*:outline",
  {
    variants: {
      raised: {
        true: "*:shadow-contra-normal",
        false: "*:shadow-none",
      },
      disabled: {
        true: "*:!cursor-not-allowed *:!border-contra-black-300 *:!text-contra-black-300 *:!shadow-contra-black-300 *:placeholder:!text-contra-black-300",
      },
    },
    defaultVariants: {
      raised: false,
      disabled: false,
    },
  },
);
