import { cva } from "class-variance-authority";

export const CREDIT_CARD_ASTERISK = "\u2731";

export const CARD_NUMBER_PLACEHOLDER = [
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
].join(" ");

export const creditCardCva = cva(
  "cr-min-h-65 cr-min-w-106.25 cr-rounded-6 cr-border-0.5 cr-border-black cr-bg-pink cr-px-8.5 cr-pb-6 cr-pt-7 cr-text-white",
  {
    variants: {
      raised: {
        true: "cr-shadow-normal",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
