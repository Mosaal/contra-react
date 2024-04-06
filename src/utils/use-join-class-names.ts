import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function joinClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useJoinClassNames(...inputs: ClassValue[]) {
  return useMemo(() => joinClassNames(inputs), [inputs]);
}
