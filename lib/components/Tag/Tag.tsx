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
        !active && !!onClick && "contra-cursor-pointer",
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="contra-flex contra-flex-row contra-items-center contra-gap-x-1">
        {label}
        {active && (
          <button
            type="button"
            className="contra-flex contra-h-4 contra-w-4 contra-cursor-pointer contra-appearance-none contra-items-center contra-justify-center"
            onClick={onDeactivate}
          >
            <X className="contra-stroke-4" />
          </button>
        )}
      </div>
    </div>
  );
});
