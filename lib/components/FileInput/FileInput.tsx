import { forwardRef } from "react";

import { fileInputCva } from "./FileInput.styles";
import type { FileInputProps } from "./FileInput.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(function (
  { id, raised = false, inputSize, className, inputClassName, ...props },
  ref,
) {
  const inputId = useInputId("file-input", id);

  return (
    <label
      htmlFor={inputId}
      className={cn("cr-inline-block cr-w-85 cr-max-w-full", className)}
    >
      <input
        ref={ref}
        type="file"
        id={inputId}
        size={inputSize}
        className={cn(fileInputCva({ raised, className: inputClassName }))}
        {...props}
      />
    </label>
  );
});
