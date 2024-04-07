import { forwardRef, useMemo, useState } from "react";

import type { PasswordInputProps } from "./PasswordInput.types";

import { Input } from "../Input";

import { Eye, EyeOff } from "@/icons";

import { useInputId } from "@/utils";

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function ({ id, ...props }, ref) {
    const inputId = useInputId("password", id);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const EyeIcon = useMemo(() => (isVisible ? EyeOff : Eye), [isVisible]);
    return (
      <Input
        ref={ref}
        id={inputId}
        type={isVisible ? "text" : "password"}
        rightIcon={<EyeIcon className="w-6 h-6" />}
        onRightIconClick={() => setIsVisible(!isVisible)}
        {...props}
      />
    );
  },
);

export default PasswordInput;
