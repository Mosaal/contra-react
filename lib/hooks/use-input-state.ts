import { useCallback, useState } from "react";

export interface UseInputStateConfig<T> {
  value?: T;
  defaultValue?: T;
  finalValue: T;
  type?: "checkbox";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function useInputState<T>({
  value,
  defaultValue,
  finalValue,
  type,
  onChange,
}: UseInputStateConfig<T>): [T, React.ChangeEventHandler<HTMLInputElement>] {
  const [controlledValue, setControlledValue] = useState<T>(
    value ?? defaultValue ?? finalValue,
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        if (type === "checkbox") {
          setControlledValue(e.target.checked as T);
        } else {
          setControlledValue(e.target.value as T);
        }
      }
      onChange?.(e);
    },
    [value, type, onChange],
  );

  return [controlledValue, handleChange];
}
