import { cva } from "class-variance-authority";

export const codeInputCva = cva("contra-code-input", {
  variants: {
    raised: {
      true: "contra-code-input-raised",
    },
    disabled: {
      true: "contra-code-input-disabled",
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
