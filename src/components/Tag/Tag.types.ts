export type TagBaseProps = React.ComponentPropsWithoutRef<"div">;

export interface TagProps extends TagBaseProps {
  label: string;
  active?: boolean;
  onDeactivate?: React.MouseEventHandler<SVGSVGElement>;
}
