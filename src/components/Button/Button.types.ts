export type ButtonSize = "small" | "normal" | "large";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";

export type ButtonBaseProps = React.ComponentPropsWithoutRef<"button">;

export interface ButtonProps extends ButtonBaseProps {
  block?: boolean;
  raised?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
