import { cva } from "class-variance-authority";

export const avatarCva = cva(
  "cr-bg-red-000 cr-border-black-000 cr-relative cr-overflow-hidden cr-rounded-full cr-border-0.5",
  {
    variants: {
      size: {
        small: "cr-h-8 cr-w-8",
        normal: "cr-h-15 cr-w-15",
        large: "cr-h-18 cr-w-18",
      },
    },
    defaultVariants: {
      size: "normal",
    },
  },
);

export const avatarImageCva = cva(
  "cr-absolute cr-left-0 cr-top-0 cr-h-full cr-w-full cr-object-cover cr-transition-opacity",
  {
    variants: {
      loaded: {
        true: "cr-opacity-100",
        false: "cr-opacity-0",
      },
    },
    defaultVariants: {
      loaded: false,
    },
  },
);

export const avatarPlaceholderCva = cva(
  "cr-absolute cr-left-1/2 cr-top-1/2 -cr-translate-x-1/2 -cr-translate-y-1/2 cr-font-semibold",
  {
    variants: {
      size: {
        small: "cr-text-xs",
        normal: "",
        large: "cr-text-2xl",
      },
    },
    defaultVariants: {
      size: "normal",
    },
  },
);
