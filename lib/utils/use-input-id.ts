import { useId, useMemo } from "react";

export function useInputId(prefix?: string, id?: string) {
  const randomId = useId();
  return useMemo(
    () => id || [prefix, randomId].filter(Boolean).join("-"),
    [id, prefix, randomId],
  );
}
