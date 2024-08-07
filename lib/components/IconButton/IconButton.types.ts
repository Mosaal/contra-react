import type { VariantProps } from "class-variance-authority";

import type { iconButtonCva } from "./IconButton.styles";

export type IconButtonBaseProps = React.ComponentPropsWithoutRef<"button">;

export type IconButtonVariantProps = VariantProps<typeof iconButtonCva>;

export type IconButtonSize = NonNullable<IconButtonVariantProps["size"]>;

export type IconButtonVariant = NonNullable<IconButtonVariantProps["variant"]>;

export interface IconButtonProps
  extends IconButtonBaseProps,
    IconButtonVariantProps {}
