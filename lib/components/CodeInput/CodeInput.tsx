import { forwardRef } from "react";
import ReactCodeInput from "react-code-input";

import { codeInputCva, numberInputStyle } from "./CodeInput.styles";
import type { CodeInputProps } from "./CodeInput.types";

import { cn } from "@/utils";

export const CodeInput = forwardRef<ReactCodeInput, CodeInputProps>(function (
  { type, inputStyle, raised = false, disabled, className, ...props },
  ref,
) {
  return (
    <ReactCodeInput
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(codeInputCva({ raised, disabled, className }))}
      inputStyle={
        type === "number" ? { ...numberInputStyle, ...inputStyle } : inputStyle
      }
      {...props}
    />
  );
});
CodeInput.displayName = "CodeInput";
