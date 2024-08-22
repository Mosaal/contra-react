import { cva } from "class-variance-authority";

export const CREDIT_CARD_ASTERISK = "\u2731";

export const CARD_NUMBER_PLACEHOLDER = [
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
  Array(4).fill(CREDIT_CARD_ASTERISK).join(""),
].join(" ");

export const creditCardCva = cva(
  "cr-aspect-credit-card cr-w-106.25 cr-max-w-full cr-rounded-lg cr-border-0.5 cr-border-black-000 cr-bg-pink-000 cr-px-8.5 cr-pb-6 cr-pt-7 cr-text-white",
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
