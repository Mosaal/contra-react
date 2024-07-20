import type { ReactCodeInputProps } from "react-code-input";
import type { VariantProps } from "class-variance-authority";

import type { codeInputCva } from "./CodeInput.styles";

export type CodeInputBaseProps = Omit<ReactCodeInputProps, "disabled">;

export type CodeInputVariantProps = Omit<
  VariantProps<typeof codeInputCva>,
  "disabled"
>;

export interface CodeInputProps
  extends CodeInputBaseProps,
    CodeInputVariantProps {
  disabled?: boolean;
}
