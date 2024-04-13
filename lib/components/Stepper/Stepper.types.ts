export type StepperBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export type StepperSize = "small" | "normal";

export type StepperVariant = "single" | "double";

export type StepperContainer = "inside" | "outside";

export interface StepperProps {
  id?: string;
  name?: string;
  label?: string;
  size?: StepperSize;
  variant?: StepperVariant;
  container?: StepperContainer;
  // min?: number;
  // max?: number;
  // value?: number;
  // initialValue?: number;
  onDecrement?: (value: number) => void;
  onIncrement?: (value: number) => void;
}
