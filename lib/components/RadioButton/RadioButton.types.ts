export type RadioButtonBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface RadioButtonProps extends RadioButtonBaseProps {
  label?: string;
  labelPosition?: "left" | "right";
}
