import { forwardRef, useState } from "react";

import { iconButtonCva } from "./IconButton.styles";
import type { IconButtonComponent, IconButtonProps } from "./IconButton.types";

import type { PolymorphicRef } from "@/types";

import { cn } from "@/utils";

export const IconButton: IconButtonComponent = forwardRef(function <
  C extends React.ElementType = "button",
>(
  {
    as,
    raised = false,
    size = "normal",
    variant = "primary",
    className,
    onMouseUp,
    onMouseDown,
    children,
    ...props
  }: IconButtonProps<C>,
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
        iconButtonCva({ raised: isRaised, size, variant, className }),
      )}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      {...props}
    >
      <div className="cr-flex cr-h-full cr-w-full cr-items-center cr-justify-center">
        {children}
      </div>
    </Component>
  );
});
// @ts-expect-error Custom interface does not account for displayName but it still exists
IconButton.displayName = "IconButton";
