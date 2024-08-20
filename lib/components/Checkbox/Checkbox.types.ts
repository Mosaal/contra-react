import type { VariantProps } from "class-variance-authority";

import type { checkboxCva } from "./Checkbox.styles";

export type CheckboxBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export type CheckboxVariantProps = VariantProps<typeof checkboxCva>;

export interface CheckboxProps extends CheckboxBaseProps, CheckboxVariantProps {
  label?: string;
  labelPosition?: "left" | "right";
  checkboxClassName?: string;
}
