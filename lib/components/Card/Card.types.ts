import type { VariantProps } from "class-variance-authority";

import type { cardCva } from "./Card.styles";

export type CardBaseProps = React.ComponentPropsWithoutRef<"div">;

export type CardVariantProps = VariantProps<typeof cardCva>;

export interface CardProps extends CardBaseProps, CardVariantProps {}
