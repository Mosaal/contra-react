import { forwardRef, useState } from "react";

import { buttonCva } from "./Button.styles";
import type { ButtonComponent, ButtonProps } from "./Button.types";

import type { PolymorphicRef } from "@/types";

import { cn } from "@/utils";

export const Button: ButtonComponent = forwardRef(function <
  C extends React.ElementType = "button",
>(
  {
    as,
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
  }: ButtonProps<C>,
  ref?: PolymorphicRef<C>,
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

  const Component = as || "button";
  return (
    <Component
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
      <div className="cr-flex cr-flex-row cr-items-center cr-justify-center cr-gap-1.5">
        {leftIcon}
        {children}
        {rightIcon}
      </div>
    </Component>
  );
});
// @ts-expect-error Custom interface does not account for displayName but it still exists
Button.displayName = "Button";
