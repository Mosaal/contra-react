import { useMemo } from "react";
import type { CxOptions } from "class-variance-authority";

import { cn } from "@/utils/cn";

export function useCn(...inputs: CxOptions) {
  return useMemo(() => cn(inputs), [inputs]);
}
