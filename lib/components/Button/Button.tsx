import { forwardRef, useCallback, useState } from "react";

import { buttonCva } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

import { cn } from "@/utils";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  {
    block = false,
    raised = false,
    size = "normal",
    variant = "primary",
    leftIcon = null,
    rightIcon = null,
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
        buttonCva({
          block,
          raised: isRaised,
          size,
          variant,
          className,
        }),
      )}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      {...props}
    >
      <div className="flex flex-row items-center justify-center gap-1.5">
        {leftIcon}
        {children}
        {rightIcon}
      </div>
    </button>
  );
});

export default Button;
