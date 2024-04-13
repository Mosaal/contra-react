import type { VariantProps } from "class-variance-authority";

import { segmentedControlCva } from "./SegmentedControl.styles";

export type SegmentedControlBaseProps = React.ComponentPropsWithoutRef<"div">;

export type SegmentedControlVariantProps = VariantProps<
  typeof segmentedControlCva
>;

export interface SegmentedControlOption {
  label: string; // @TODO: accept ReactNode instead
  value: string;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends SegmentedControlBaseProps,
    SegmentedControlVariantProps {
  // value?: string;
  // onChange?: (value: string) => void;
  options: SegmentedControlOption[];
}
