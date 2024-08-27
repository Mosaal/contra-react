import { forwardRef, useState } from "react";

import type { PasswordInputProps } from "./PasswordInput.types";

import { Input } from "../Input";

import { Eye, EyeOff } from "@/icons";

import { useInputId } from "@/hooks";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function ({ id, ...props }, ref) {
    const inputId = useInputId("password", id);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const EyeIcon = isVisible ? EyeOff : Eye;
    return (
      <Input
        ref={ref}
        id={inputId}
        type={isVisible ? "text" : "password"}
        rightIcon={<EyeIcon className="cr-h-6 cr-w-6" />}
        onRightIconClick={() => setIsVisible(!isVisible)}
        {...props}
      />
    );
  },
);
PasswordInput.displayName = "PasswordInput";
