import { forwardRef } from "react";

import { alertCva, alertIconCva } from "./Alert.styles";
import type { AlertProps } from "./Alert.types";

import { AlertTriangle, Check, Info, X } from "@/icons";

import { cn } from "@/utils";

const ICONS: Record<NonNullable<AlertProps["variant"]>, React.ReactNode> = {
  info: <Info className="text-contra-black" />,
  warning: <AlertTriangle className="-mt-0.75 text-contra-black" />,
  error: <X className="text-contra-black" />,
  success: <Check className="text-contra-black" />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function (
  { title, message, variant = "info", className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn(alertCva({ className }))} {...props}>
      <div className={cn(alertIconCva({ variant }))}>
        {ICONS[variant || "info"]}
      </div>
      <div className="mt-2 text-contra-white">
        <p className="mb-2 text-4.25 font-extrabold leading-6">{title}</p>
        {message && (
          <span className="block text-3.75 font-medium leading-5.5">
            {message}
          </span>
        )}
      </div>
    </div>
  );
});
