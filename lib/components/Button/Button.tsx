import { forwardRef, useState } from "react";

import { buttonCva } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

import { cn } from "@/utils";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
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
      <div className="contra-flex contra-flex-row contra-items-center contra-justify-center contra-gap-1.5">
        {leftIcon}
        {children}
        {rightIcon}
      </div>
    </button>
  );
});
