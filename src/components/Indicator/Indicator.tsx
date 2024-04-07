import { forwardRef, useMemo } from "react";

import type {
  IndicatorProps,
  VerticalPosition,
  HorizontalPosition,
} from "./Indicator.types";

import { useCn } from "@/utils";

const INDICATOR_POSITIONS: Record<
  VerticalPosition | HorizontalPosition,
  string
> = {
  top: "top-0",
  left: "left-0",
  right: "right-0",
  bottom: "bottom-0",
};

const INDICATOR_TRANSLATIONS: Record<
  VerticalPosition | HorizontalPosition,
  string
> = {
  top: "-translate-y-1/2",
  left: "-translate-x-1/2",
  right: "translate-x-1/2",
  bottom: "translate-y-1/2",
};

const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function (
  { label, position = "top-right", className, children, ...props },
  ref,
) {
  const [vertical, horizontal] = useMemo(
    () => position.split("-") as [VerticalPosition, HorizontalPosition],
    [position],
  );

  const wrapperClassName = useCn("inline-block relative", className);
  const positionClassName = useCn(
    "absolute",
    INDICATOR_POSITIONS[vertical],
    INDICATOR_POSITIONS[horizontal],
  );
  const indicatorClassName = useCn(
    "min-w-4 h-4 px-1 text-3 leading-4 font-bold rounded-7.5 text-contra-white bg-contra-red",
    INDICATOR_TRANSLATIONS[vertical],
    INDICATOR_TRANSLATIONS[horizontal],
  );

  return (
    <div ref={ref} className={wrapperClassName} {...props}>
      {children}
      <div className={positionClassName}>
        <div className={indicatorClassName}>{label}</div>
      </div>
    </div>
  );
});

export default Indicator;
