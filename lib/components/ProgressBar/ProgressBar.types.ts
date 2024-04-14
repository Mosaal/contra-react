import { VariantProps } from "class-variance-authority";

import { progressBarCva } from "./ProgressBar.styles";

export type ProgressBarBaseProps = React.ComponentPropsWithoutRef<"div">;

export type ProgressBarVariantProps = VariantProps<typeof progressBarCva>;

export interface ProgressBarProps
  extends ProgressBarBaseProps,
    ProgressBarVariantProps {
  value: number;
}
