import { forwardRef, useCallback, useState } from "react";

import { iconButtonCva } from "./IconButton.styles";
import type { IconButtonProps } from "./IconButton.types";

import { cn } from "@/utils";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function (
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

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (raised) setIsRaised(true);
      onMouseUp?.(e);
    },
    [raised, onMouseUp],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (raised) setIsRaised(false);
      onMouseDown?.(e);
    },
    [raised, onMouseDown],
  );

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
});

export default IconButton;
