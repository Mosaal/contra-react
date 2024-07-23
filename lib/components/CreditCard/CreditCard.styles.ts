import { cva } from "class-variance-authority";

export const CREDIT_CARD_ASTERISK = "\u2731";

export const CARD_NUMBER_PLACEHOLDER = [
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
].join(" ");

export const creditCardCva = cva(
  "contra-min-h-65 contra-min-w-106.25 contra-rounded-6 contra-border-0.5 contra-border-black contra-bg-pink contra-px-8.5 contra-pb-6 contra-pt-7 contra-text-white",
  {
    variants: {
      raised: {
        true: "contra-shadow-normal",
        false: "contra-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
