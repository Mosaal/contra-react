import type { VariantProps } from "class-variance-authority";

import type { avatarCva } from "./Avatar.styles";

export type AvatarBaseProps = React.ComponentPropsWithoutRef<"div">;

export type AvatarVariantProps = VariantProps<typeof avatarCva>;

export interface AvatarProps extends AvatarBaseProps, AvatarVariantProps {
  src?: string;
  alt?: string;
  placeholder?: React.ReactNode;
}
