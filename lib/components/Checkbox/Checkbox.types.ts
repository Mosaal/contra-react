import type { VariantProps } from "class-variance-authority";

import { checkboxCva } from "./Checkbox.styles";

export type CheckboxVariantProps = VariantProps<typeof checkboxCva>;

export type CheckboxBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface CheckboxProps extends CheckboxBaseProps, CheckboxVariantProps {
  label?: string;
  labelPosition?: "left" | "right";
}
