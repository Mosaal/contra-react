import type { ButtonSize, ButtonVariant } from "../Button";

export type IconButtonBaseProps = React.ComponentProps<"button">;

export interface IconButtonProps extends IconButtonBaseProps {
  raised?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
