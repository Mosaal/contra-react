import type { VariantProps } from "class-variance-authority";

import { buttonCva } from "./Button.styles";

export type ButtonBaseProps = React.ComponentPropsWithoutRef<"button">;

export type ButtonVariantProps = VariantProps<typeof buttonCva>;

export type ButtonSize = NonNullable<ButtonVariantProps["size"]>;

export type ButtonVariant = NonNullable<ButtonVariantProps["variant"]>;

export interface ButtonProps extends ButtonBaseProps, ButtonVariantProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
