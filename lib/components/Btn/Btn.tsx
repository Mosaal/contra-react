import { forwardRef, useCallback, useState } from "react";

import { btnCva } from "./Btn.styles";
import type { BtnProps } from "./Btn.types";

import { useCn } from "@/utils";

const Btn = forwardRef<HTMLButtonElement, BtnProps>(function (
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

  const btnClassName = useCn(
    btnCva({ block, raised: isRaised, size, variant, className }),
  );

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
      className={btnClassName}
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

export default Btn;
