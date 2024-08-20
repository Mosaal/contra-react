import type { VariantProps } from "class-variance-authority";

import type { inputCva } from "./Input.styles";

export type InputBaseProps = React.ComponentPropsWithoutRef<"input">;

export type InputVariantProps = VariantProps<typeof inputCva>;

export interface InputProps extends InputBaseProps, InputVariantProps {
  inputClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}
