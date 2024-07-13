import { forwardRef } from "react";
import ReactCodeInput from "react-code-input";

import { codeInputCva } from "./CodeInput.styles";
import { CodeInputProps } from "./CodeInput.types";

import { cn } from "@/utils";

const CodeInput = forwardRef<ReactCodeInput, CodeInputProps>(function (
  { type, raised = false, disabled, inputStyle, className, ...props },
  ref,
) {
  return (
    <ReactCodeInput
      ref={ref}
      disabled={disabled}
      className={cn(codeInputCva({ raised, disabled, className }))}
      inputStyle={
        type === "number"
          ? {
              ...inputStyle,
              WebkitAppearance: "none",
              MozAppearance: "textfield",
              margin: 0,
            }
          : inputStyle
      }
      {...props}
    />
  );
});

export default CodeInput;
