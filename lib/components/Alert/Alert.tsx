import { forwardRef } from "react";

import { alertCva, alertIconCva } from "./Alert.styles";
import type { AlertProps } from "./Alert.types";

import { AlertTriangle, Check, Info, X } from "@/icons";

import { cn } from "@/utils";

const ICONS: Record<NonNullable<AlertProps["variant"]>, React.ReactNode> = {
  info: <Info className="contra-text-black" />,
  warning: <AlertTriangle className="-contra-mt-0.75 contra-text-black" />,
  error: <X className="contra-text-black" />,
  success: <Check className="contra-text-black" />,
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
      <div className="contra-mt-2 contra-text-white">
        <p className="contra-mb-2 contra-text-4.25 contra-font-extrabold contra-leading-6">
          {title}
        </p>
        {message && (
          <span className="contra-block contra-text-3.75 contra-font-medium contra-leading-5.5">
            {message}
          </span>
        )}
      </div>
    </div>
  );
});
