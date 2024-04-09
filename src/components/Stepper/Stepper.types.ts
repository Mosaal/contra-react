export type StepperBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export type StepperSize = "small" | "normal";

// export type StepperVariant = "inside" | "outside";

export interface StepperProps {
  id?: string;
  name?: string;
  label?: string;
  size?: StepperSize;
  min?: number;
  max?: number;
  value?: number;
  initialValue?: number;
  // variant?: StepperVariant;
  steps: "single" | "double";
  type: "inside" | "outside";
  direction: "negative" | "positive";
  onDecrement?: (value: number) => void;
  onIncrement?: (value: number) => void;
}
