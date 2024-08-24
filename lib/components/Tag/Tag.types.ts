import type { VariantProps } from "class-variance-authority";

import type { tagCva } from "./Tag.styles";

import type { PolymorphicComponentProps } from "@/types";

export type TagVariantProps = VariantProps<typeof tagCva>;

export type TagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  TagVariantProps & {
    onDeactivate?: React.MouseEventHandler<HTMLButtonElement>;
  }
>;

export type TagComponent = <C extends React.ElementType = "div">(
  props: TagProps<C>,
) => React.ReactNode;
