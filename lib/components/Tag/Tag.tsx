import { forwardRef } from "react";

import { tagCva } from "./Tag.styles";
import type { TagComponent, TagProps } from "./Tag.types";

import { X } from "@/icons";

import { PolymorphicRef } from "@/types";

import { cn } from "@/utils";

export const Tag: TagComponent = forwardRef(function <
  C extends React.ElementType = "div",
>(
  {
    as,
    active = false,
    raised = false,
    className,
    children,
    onClick,
    onDeactivate,
    ...props
  }: TagProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active) onClick?.(e);
  };

  const Component = as || "div";
  return (
    <Component
      ref={ref}
      className={cn(
        tagCva({ active, raised, className }),
        !active && !!onClick && "cr-cursor-pointer",
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="cr-flex cr-flex-row cr-items-center cr-gap-x-1">
        {children}
        {active && (
          <button
            type="button"
            className="cr-flex cr-h-4 cr-w-4 cr-cursor-pointer cr-appearance-none cr-items-center cr-justify-center"
            onClick={onDeactivate}
          >
            <X className="cr-stroke-4" />
          </button>
        )}
      </div>
    </Component>
  );
});
