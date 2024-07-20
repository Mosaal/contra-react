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
  return (
    <div
      ref={ref}
      className={cn(
        tagCva({ active, raised, className }),
        !active && !!onClick && "cursor-pointer",
      )}
      onClick={onClick}
      {...props}
    >
      <div className="flex flex-row items-center gap-x-1">
        {label}
        {active && (
          <X
            className="h-4 w-4 cursor-pointer stroke-4"
            onClick={onDeactivate}
          />
        )}
      </div>
    </div>
  );
});
