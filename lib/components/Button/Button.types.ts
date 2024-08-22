import type { VariantProps } from "class-variance-authority";

import type { buttonCva } from "./Button.styles";

import type { PolymorphicComponentProps } from "@/types";

export type ButtonVariantProps = VariantProps<typeof buttonCva>;

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<
    C,
    ButtonVariantProps & {
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
    }
  >;

export type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>,
) => React.ReactNode;
