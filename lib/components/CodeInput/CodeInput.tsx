import { forwardRef } from "react";
import ReactCodeInput from "react-code-input";

import { codeInputCva } from "./CodeInput.styles";
import type { CodeInputProps } from "./CodeInput.types";

import { cn } from "@/utils";

const CodeInput = forwardRef<ReactCodeInput, CodeInputProps>(function (
  { type, inputStyle, raised = false, disabled, className, ...props },
  ref,
) {
  return (
    <ReactCodeInput
      ref={ref}
      disabled={disabled}
      className={cn(codeInputCva({ raised, disabled, className }))}
      inputStyle={
        type === "number" ? { ...numberInputStyle, ...inputStyle } : inputStyle
      }
      {...props}
    />
  );
});

const numberInputStyle: React.CSSProperties = {
  WebkitAppearance: "none",
  MozAppearance: "textfield",
  margin: 0,
};

export default CodeInput;
