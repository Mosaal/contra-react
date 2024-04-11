import { forwardRef } from "react";

import type { TagProps } from "./Tag.types";

import { X } from "@/icons";

import { useCn } from "@/utils";

const Tag = forwardRef<HTMLDivElement, TagProps>(function (
  { label, active = false, className, onDeactivate, ...props },
  ref,
) {
  const tagClassName = useCn(
    "px-2.5 py-2 rounded-11 text-3 leading-4 font-extrabold border-0.5 border-contra-black",
    active ? "bg-contra-pink-800" : "bg-contra-white",
    className,
  );

  return (
    <div ref={ref} className={tagClassName} {...props}>
      <div className="flex flex-row items-center gap-x-1">
        {label}
        {active && (
          <X
            strokeWidth={4}
            className="w-4 h-4 cursor-pointer"
            onClick={onDeactivate}
          />
        )}
      </div>
    </div>
  );
});

export default Tag;
