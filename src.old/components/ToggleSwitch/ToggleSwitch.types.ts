export type ToggleSwitchBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface ToggleSwitchProps extends ToggleSwitchBaseProps {
  leftLabel?: string;
  rightLabel?: string;
}
