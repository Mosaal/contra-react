import type { VariantProps } from "class-variance-authority";

import { counterContainerCva } from "./Counter.styles";

export type CounterVariantProps = VariantProps<typeof counterContainerCva>;

export interface CounterProps extends CounterVariantProps {
  id?: string;
  name?: string;
  className?: string;
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}
