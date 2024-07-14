import { forwardRef } from "react";

import { cardCva } from "./Card.styles";
import type { CardProps } from "./Card.types";

import { cn } from "@/utils";

const Card = forwardRef<HTMLDivElement, CardProps>(function (
  { raised = false, className, children, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn(cardCva({ raised, className }))} {...props}>
      {children}
    </div>
  );
});

export default Card;
