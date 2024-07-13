import type { VariantProps } from "class-variance-authority";

import { stepperContainerCva } from "./Stepper.styles";

export type StepperVariantProps = VariantProps<typeof stepperContainerCva>;

export interface StepperProps extends StepperVariantProps {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: number;
  className?: string;
  disabled?: boolean;
  action?: "increment" | "decrement";
  onChange?: (value: number) => void;
}
