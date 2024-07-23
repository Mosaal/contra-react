import { cva } from "class-variance-authority";

export const codeInputCva = cva("cr-code-input", {
  variants: {
    raised: {
      true: "cr-code-input-raised",
    },
    disabled: {
      true: "cr-code-input-disabled",
    },
  },
  defaultVariants: {
    raised: false,
    disabled: false,
  },
});

export const numberInputStyle: React.CSSProperties = {
  WebkitAppearance: "none",
  MozAppearance: "textfield",
  margin: 0,
};
