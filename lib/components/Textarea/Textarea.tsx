import { forwardRef } from "react";

import { textareaCva, textareaIconCva } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function (
  {
    id,
    raised = false,
    disabled,
    leftIcon,
    rightIcon,
    className,
    onLeftIconClick,
    onRightIconClick,
    ...props
  },
  ref,
) {
  const inputId = useInputId("textarea", id);

  const handleClickIcon = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    clickHandler?: () => void,
  ) => {
    e.preventDefault();
    if (disabled) return;
    clickHandler?.();
  };

  const renderIcon = (
    icon: React.ReactNode,
    position: "left" | "right",
    clickHandler?: () => void,
  ) => {
    return (
      <div
        className={cn(
          textareaIconCva({ disabled, position, clickable: !!clickHandler }),
        )}
        onClick={(e) => handleClickIcon(e, clickHandler)}
      >
        {icon}
      </div>
    );
  };

  return (
    <label htmlFor={inputId} className="inline-block w-full">
      <div className="relative inline-flex w-full">
        {leftIcon && renderIcon(leftIcon, "left", onLeftIconClick)}
        <textarea
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            textareaCva({ raised, className }),
            leftIcon ? "pl-12.5" : "pl-3.5",
            rightIcon ? "pr-12.5" : "pr-3.5",
          )}
          {...props}
        />
        {rightIcon && renderIcon(rightIcon, "right", onRightIconClick)}
      </div>
    </label>
  );
});

export default Textarea;
