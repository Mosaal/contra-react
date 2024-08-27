import { forwardRef } from "react";

import { ratingCva, ratingStarCva, ratingLabelCva } from "./Rating.styles";
import type { RatingProps } from "./Rating.types";

import { Star } from "@/icons";

import { cn } from "@/utils";

export const Rating = forwardRef<HTMLDivElement, RatingProps>(function (
  {
    value = 0,
    max = 5,
    label = true,
    labelPosition = "right",
    size = "normal",
    className,
    ...props
  },
  ref,
) {
  const clampedValue = Math.min(max, Math.max(0, value));

  const renderLabel = () => {
    return <span className={cn(ratingLabelCva({ size }))}>{clampedValue}</span>;
  };

  return (
    <div ref={ref} className={cn(ratingCva({ size, className }))} {...props}>
      {label && labelPosition === "left" && renderLabel()}
      {new Array(max).fill(null).map((_, index) => (
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
      {label && labelPosition === "right" && renderLabel()}
    </div>
  );
});
Rating.displayName = "Rating";
