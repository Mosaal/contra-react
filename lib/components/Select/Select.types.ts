import type { VariantProps } from "class-variance-authority";

import type { selectCva } from "./Select.styles";

export type SelectBaseProps = Omit<
  React.ComponentPropsWithoutRef<"select">,
  "multiple"
>;

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
  selectClassName?: string;
  options?: SelectOption[];
  leftIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
}
