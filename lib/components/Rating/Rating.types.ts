import type { VariantProps } from "class-variance-authority";

import type { ratingCva } from "./Rating.styles";

export type RatingBaseProps = React.ComponentPropsWithoutRef<"div">;

export type RatingVariantProps = VariantProps<typeof ratingCva>;

export interface RatingProps extends RatingBaseProps, RatingVariantProps {
  max?: number;
  value?: number;
}
