import type { VariantProps } from "class-variance-authority";

import { inputCva } from "./Input.styles";

export type InputBaseProps = React.ComponentPropsWithoutRef<"input">;

export type InputVariantProps = VariantProps<typeof inputCva>;

export interface InputProps extends InputBaseProps, InputVariantProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}
