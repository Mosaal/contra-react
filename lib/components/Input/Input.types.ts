export type InputBaseProps = React.ComponentPropsWithoutRef<"input">;

export interface InputProps extends InputBaseProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}
