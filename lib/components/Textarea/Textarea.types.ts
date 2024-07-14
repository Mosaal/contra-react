import type { VariantProps } from "class-variance-authority";

import { textareaCva } from "./Textarea.styles";

export type TextareaBaseProps = React.ComponentPropsWithoutRef<"textarea">;

export type TextareaVariantProps = VariantProps<typeof textareaCva>;

export interface TextareaProps extends TextareaBaseProps, TextareaVariantProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}
