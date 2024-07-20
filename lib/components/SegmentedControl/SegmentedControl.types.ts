import type { VariantProps } from "class-variance-authority";

import type { segmentedControlCva } from "./SegmentedControl.styles";

export type SegmentedControlBaseProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "onChange"
>;

export type SegmentedControlVariantProps = VariantProps<
  typeof segmentedControlCva
>;

export interface SegmentedControlOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends SegmentedControlBaseProps,
    SegmentedControlVariantProps {
  value?: string;
  defaultValue?: string;
  options: SegmentedControlOption[];
  onChange?: (value: string) => void;
}
