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
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue,
  );

  const handleUncontrolledChange = useCallback(
    (val: T) => {
      setUncontrolledValue(val);
      onChange?.(val);
    },
    [onChange],
  );

  if (value !== undefined) return [value as T, onChange];
  return [uncontrolledValue as T, handleUncontrolledChange];
}
