export type PasswordInputBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface PasswordInputProps extends PasswordInputBaseProps {
  leftIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
}
