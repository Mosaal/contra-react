export type CheckboxBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface CheckboxProps extends CheckboxBaseProps {
  label?: string;
  labelPosition?: "left" | "right";
}
