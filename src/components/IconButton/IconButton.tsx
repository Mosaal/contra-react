import { useCallback, useState } from "react";

import type { IconButtonProps } from "./IconButton.types";
import { BUTTON_COLORS, type ButtonSize } from "../Button";

import { useJoinClassNames } from "@/utils";

const ICON_BUTTON_SHADOWS: Record<ButtonSize, string> = {
  small: "shadow-contra-button-small",
  normal: "shadow-contra-button-small",
  large: "shadow-contra-button-normal",
};

const ICON_BUTTON_SIZES: Record<ButtonSize, string> = {
  small: "w-8 h-8",
  normal: "w-12 h-12",
  large: "w-15 h-15",
};

export default function IconButton({
  raised,
  size = "normal",
  variant = "primary",
  className,
  children,
  ...props
}: IconButtonProps) {
  const [isRaised, setIsRaised] = useState<boolean>(!!raised);

  const finalClassName = useJoinClassNames(
    "appearance-none rounded-full transition border-0.5 shadow-contra-black disabled:shadow-contra-black-300 disabled:cursor-not-allowed",
    ICON_BUTTON_SIZES[size],
    BUTTON_COLORS[variant],
    isRaised ? ICON_BUTTON_SHADOWS[size] : "shadow-none",
    className,
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (raised) setIsRaised(true);
    },
    [],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (raised) setIsRaised(false);
    },
    [],
  );

  return (
    <button
      className={finalClassName}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      {...props}
    >
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </button>
  );
}
