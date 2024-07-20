import type { VariantProps } from "class-variance-authority";

import type { progressBarCva } from "./ProgressBar.styles";

export type ProgressBarBaseProps = React.ComponentPropsWithoutRef<"progress">;

export type ProgressBarVariantProps = VariantProps<typeof progressBarCva>;

export interface ProgressBarProps
  extends ProgressBarBaseProps,
    ProgressBarVariantProps {}
