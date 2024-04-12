import { VariantProps } from "class-variance-authority";

import { radioButtonCva } from "./RadioButton.styles";

export type RadioButtonVariantProps = VariantProps<typeof radioButtonCva>;

export type RadioButtonBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export interface RadioButtonProps extends RadioButtonBaseProps {
  label?: string;
  labelPosition?: "left" | "right";
}
