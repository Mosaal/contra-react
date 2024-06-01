import { useCallback, useState } from "react";

export interface UseControlledStateConfig<T> {
  value?: T;
  defaultValue?: T;
  finalValue?: T;
  onChange?: (value: T) => void;
}

export function useControlledState<T>({
  value,
  defaultValue,
  finalValue,
  onChange = () => {},
}: UseControlledStateConfig<T>): [T, (value: T) => void] {
  const [controlledValue, setControlledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue,
  );

  const handleControlledChange = useCallback(
    (val: T) => {
      setControlledValue(val);
      onChange?.(val);
    },
    [onChange],
  );

  if (value !== undefined) return [value as T, onChange];
  return [controlledValue as T, handleControlledChange];
}
