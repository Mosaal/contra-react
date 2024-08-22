import type { VariantProps } from "class-variance-authority";

import type { iconButtonCva } from "./IconButton.styles";

import type { PolymorphicComponentProps } from "@/types";

export type IconButtonVariantProps = VariantProps<typeof iconButtonCva>;

export type IconButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, IconButtonVariantProps>;

export type IconButtonComponent = <C extends React.ElementType = "button">(
  props: IconButtonProps<C>,
) => React.ReactNode;
