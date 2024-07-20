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
        !active && !!onClick && "cursor-pointer",
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="flex flex-row items-center gap-x-1">
        {label}
        {active && (
          <button
            type="button"
            className="flex h-4 w-4 cursor-pointer appearance-none items-center justify-center"
            onClick={onDeactivate}
          >
            <X className="stroke-4" />
          </button>
        )}
      </div>
    </div>
  );
});
