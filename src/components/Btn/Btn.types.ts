import type { VariantProps } from "class-variance-authority";

import { btnCva } from "./Btn.styles";

export type BtnBaseProps = React.ComponentProps<"button">;

export type BtnVariantProps = VariantProps<typeof btnCva>;

export type BtnSize = NonNullable<BtnProps["size"]>;

export type BtnVariant = NonNullable<BtnProps["variant"]>;

export interface BtnProps extends BtnBaseProps, BtnVariantProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
