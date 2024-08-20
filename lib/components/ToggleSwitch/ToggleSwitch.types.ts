import type { VariantProps } from "class-variance-authority";

import type { toggleSwitchCva } from "./ToggleSwitch.styles";

export type ToggleSwitchBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export type ToggleSwitchVariantProps = VariantProps<typeof toggleSwitchCva>;

export interface ToggleSwitchProps
  extends ToggleSwitchBaseProps,
    ToggleSwitchVariantProps {
  leftLabel?: string;
  rightLabel?: string;
  toggleSwitchClassName?: string;
}
