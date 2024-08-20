import { forwardRef } from "react";

import { alertCva, alertIconCva } from "./Alert.styles";
import type { AlertProps } from "./Alert.types";

import { AlertTriangle, Check, Info, X } from "@/icons";

import { cn } from "@/utils";

const ICONS: Record<NonNullable<AlertProps["variant"]>, React.ReactNode> = {
  info: <Info className="cr-text-black-000" />,
  warning: <AlertTriangle className="-cr-mt-0.75 cr-text-black-000" />,
  error: <X className="cr-text-black-000" />,
  success: <Check className="cr-text-black-000" />,
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
      <div className="cr-mt-2 cr-text-white">
        <p className="cr-mb-2 cr-text-lg cr-font-extrabold cr-leading-6">
          {title}
        </p>
        {message && (
          <span className="cr-block cr-text-md cr-font-medium cr-leading-5.5">
            {message}
          </span>
        )}
      </div>
    </div>
  );
});
