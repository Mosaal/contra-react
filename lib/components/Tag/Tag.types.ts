import type { VariantProps } from "class-variance-authority";

import type { tagCva } from "./Tag.styles";

export type TagBaseProps = React.ComponentPropsWithoutRef<"div">;

export type TagVariantProps = VariantProps<typeof tagCva>;

export interface TagProps extends TagBaseProps, TagVariantProps {
  label: string;
  onDeactivate?: React.MouseEventHandler<HTMLButtonElement>;
}
