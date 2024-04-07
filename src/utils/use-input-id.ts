import { useId, useMemo } from "react";

export function useInputId(prefix?: string, id?: string) {
  const randomId = useId();
  return useMemo(
    () => [prefix, id || randomId].filter(Boolean).join("-"),
    [prefix, id],
  );
}
