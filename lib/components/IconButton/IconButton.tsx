import { forwardRef, useState } from "react";

import { iconButtonCva } from "./IconButton.styles";
import type { IconButtonProps } from "./IconButton.types";

import { cn } from "@/utils";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function (
    {
      raised = false,
      size = "normal",
      variant = "primary",
      className,
      onMouseUp,
      onMouseDown,
      children,
      ...props
    },
    ref,
  ) {
    const [isRaised, setIsRaised] = useState<boolean>(!!raised);

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (raised) setIsRaised(true);
      onMouseUp?.(e);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (raised) setIsRaised(false);
      onMouseDown?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn(
          iconButtonCva({ raised: isRaised, size, variant, className }),
        )}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        {...props}
      >
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </button>
    );
  },
);
