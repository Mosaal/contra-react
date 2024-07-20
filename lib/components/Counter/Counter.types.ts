import type { VariantProps } from "class-variance-authority";

import type { counterContainerCva } from "./Counter.styles";

export type CounterVariantProps = VariantProps<typeof counterContainerCva>;

export interface CounterProps extends CounterVariantProps {
  id?: string;
  name?: string;
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}
