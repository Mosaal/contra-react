import type { VariantProps } from "class-variance-authority";

import { selectCva } from "./Select.styles";

export type SelectBaseProps = React.ComponentPropsWithoutRef<"select">;

export type SelectVariantProps = Omit<
  VariantProps<typeof selectCva>,
  "placeholder"
>;

export interface SelectOption extends React.ComponentPropsWithoutRef<"option"> {
  value: string;
  label: string;
}

export interface SelectProps extends SelectBaseProps, SelectVariantProps {
  placeholder?: string;
  options?: SelectOption[];
  leftIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
}
