import type { VariantProps } from "class-variance-authority";

import { radioButtonCva } from "./RadioButton.styles";

export type RadioButtonBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export type RadioButtonVariantProps = VariantProps<typeof radioButtonCva>;

export interface RadioButtonProps
  extends RadioButtonBaseProps,
    RadioButtonVariantProps {
  label?: string;
  labelPosition?: "left" | "right";
}
