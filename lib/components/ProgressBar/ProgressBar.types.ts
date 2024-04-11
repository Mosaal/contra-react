export type ProgressBarBaseProps = React.ComponentPropsWithoutRef<"div">;

export interface ProgressBarProps extends ProgressBarBaseProps {
  value: number;
}
