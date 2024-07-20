import type { VariantProps } from "class-variance-authority";

import type { alertCva, alertIconCva } from "./Alert.styles";

export type AlertBaseProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "title"
>;

type AlertIconVariantProps = VariantProps<typeof alertIconCva>;

export type AlertVariantProps = VariantProps<typeof alertCva>;

export interface AlertProps extends AlertBaseProps, AlertVariantProps {
  title: React.ReactNode;
  message?: React.ReactNode;
  variant?: AlertIconVariantProps["variant"];
}
