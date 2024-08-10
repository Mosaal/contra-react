import type { VariantProps } from "class-variance-authority";

import type { indicatorCva } from "./Indicator.styles";

export type IndicatorBaseProps = React.ComponentPropsWithoutRef<"div">;

export type IndicatorVariantProps = VariantProps<typeof indicatorCva>;

export interface IndicatorProps
  extends IndicatorBaseProps,
    IndicatorVariantProps {
  label?: React.ReactNode;
  offsetX?: number | string;
  offsetY?: number | string;
}
