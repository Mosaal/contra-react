export type IndicatorBaseProps = React.ComponentPropsWithoutRef<"div">;

export type VerticalPosition = "top" | "bottom";

export type HorizontalPosition = "left" | "right";

export type IndicatorPosition = `${VerticalPosition}-${HorizontalPosition}`;

export interface IndicatorProps extends IndicatorBaseProps {
  label?: string;
  position?: IndicatorPosition;
}
