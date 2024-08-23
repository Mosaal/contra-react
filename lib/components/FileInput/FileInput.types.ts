import type { VariantProps } from "class-variance-authority";

import type { fileInputCva } from "./FileInput.styles";

export type FileInputBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "size"
>;

export type FileInputVariantProps = VariantProps<typeof fileInputCva>;

export interface FileInputProps
  extends FileInputBaseProps,
    FileInputVariantProps {
  inputClassName?: string;
  inputSize?: React.ComponentPropsWithoutRef<"input">["size"];
}
