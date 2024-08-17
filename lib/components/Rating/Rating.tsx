import { forwardRef } from "react";

import { ratingCva, ratingStarCva, ratingLabelCva } from "./Rating.styles";
import type { RatingProps } from "./Rating.types";

import { Star } from "@/icons";

import { cn } from "@/utils";

export const Rating = forwardRef<HTMLDivElement, RatingProps>(function (
  { size = "normal", value = 0, max = 5, className, ...props },
  ref,
) {
  const clampedValue = Math.min(max, Math.max(0, value));
  return (
    <div ref={ref} className={cn(ratingCva({ size, className }))} {...props}>
      {Array(max)
        .fill(null)
        .map((_, index) => (
          <Star
            key={`rating-star#${index}`}
            className={cn(
              ratingStarCva({
                size,
                active: Math.ceil(clampedValue) >= index + 1,
              }),
            )}
          />
        ))}
      <span className={cn(ratingLabelCva({ size }))}>{clampedValue}</span>
    </div>
  );
});
