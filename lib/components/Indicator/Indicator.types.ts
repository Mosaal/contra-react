import type { VariantProps } from "class-variance-authority";

import { indicatorCva } from "./Indicator.styles";

export type IndicatorBaseProps = React.ComponentPropsWithoutRef<"div">;

export type IndicatorVariantProps = VariantProps<typeof indicatorCva>;

export interface IndicatorProps
  extends IndicatorBaseProps,
    IndicatorVariantProps {
  label?: string;
}
