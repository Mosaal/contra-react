import { forwardRef } from "react";

import { cardCva } from "./Card.styles";
import type { CardComponent, CardProps } from "./Card.types";

import type { PolymorphicRef } from "@/types";

import { cn } from "@/utils";

export const Card: CardComponent = forwardRef(function <
  C extends React.ElementType = "div",
>(
  { as, raised = false, className, children, ...props }: CardProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = as || "div";
  return (
    <Component
      ref={ref}
      className={cn(cardCva({ raised, className }))}
      {...props}
    >
      {children}
    </Component>
  );
});
// @ts-expect-error Custom interface does not account for displayName but it still exists
Card.displayName = "Card";
