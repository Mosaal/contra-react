import { cva } from "class-variance-authority";

export const codeInputCva = cva("code-input", {
  variants: {
    raised: {
      true: "code-input-raised",
    },
    disabled: {
      true: "code-input-disabled",
    },
  },
  defaultVariants: {
    raised: false,
    disabled: false,
  },
});
