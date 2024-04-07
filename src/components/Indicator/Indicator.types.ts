export type IndicatorBaseProps = React.ComponentPropsWithoutRef<"div">;

export type IndicatorVerticalPosition = "top" | "bottom";

export type IndicatorHorizontalPosition = "left" | "right";

export type IndicatorPosition =
  `${IndicatorVerticalPosition}-${IndicatorHorizontalPosition}`;

export interface IndicatorProps extends IndicatorBaseProps {
  label?: string;
  position?: IndicatorPosition;
}
