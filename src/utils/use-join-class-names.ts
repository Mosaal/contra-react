import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useCn(...inputs: ClassValue[]) {
  return useMemo(() => cn(inputs), [inputs]);
}
