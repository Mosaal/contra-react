import { forwardRef } from "react";

import { tagCva } from "./Tag.styles";
import type { TagProps } from "./Tag.types";

import { X } from "@/icons";

import { cn } from "@/utils";

export const Tag = forwardRef<HTMLDivElement, TagProps>(function (
  {
    label,
    active = false,
    raised = false,
    className,
    onClick,
    onDeactivate,
    ...props
  },
  ref,
) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active) onClick?.(e);
  };

  return (
    <div
      ref={ref}
      className={cn(
        tagCva({ active, raised, className }),
        !active && !!onClick && "cr-cursor-pointer",
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="cr-flex cr-flex-row cr-items-center cr-gap-x-1">
        {label}
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
    </div>
  );
});
