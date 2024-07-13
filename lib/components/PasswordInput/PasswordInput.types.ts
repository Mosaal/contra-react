import type { InputProps } from "../Input";

export type PasswordInputBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface PasswordInputProps
  extends Omit<InputProps, "rightIcon" | "onRightIconClick"> {}
