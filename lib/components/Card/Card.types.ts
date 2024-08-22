import type { VariantProps } from "class-variance-authority";

import type { cardCva } from "./Card.styles";

import type { PolymorphicComponentProps } from "@/types";

export type CardVariantProps = VariantProps<typeof cardCva>;

export type CardProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  CardVariantProps
>;

export type CardComponent = <C extends React.ElementType = "div">(
  props: CardProps<C>,
) => React.ReactNode;
