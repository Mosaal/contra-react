import { forwardRef, useState } from "react";

import {
  avatarCva,
  avatarImageCva,
  avatarPlaceholderCva,
} from "./Avatar.styles";
import type { AvatarProps } from "./Avatar.types";

import { cn } from "@/utils";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function (
  { size = "normal", src, alt, placeholder, className, ...props },
  ref,
) {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div ref={ref} className={cn(avatarCva({ size, className }))} {...props}>
      {placeholder && (
        <div className={cn(avatarPlaceholderCva({ size }))}>{placeholder}</div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(avatarImageCva({ loaded }))}
      />
    </div>
  );
});
