import { useCallback, useState } from "react";

export interface UseInputStateConfig<T, E extends HTMLElement> {
  value?: T;
  defaultValue?: T;
  finalValue: T;
  type?: "checkbox";
  onChange?: React.ChangeEventHandler<E>;
}

export function useInputState<T, E extends HTMLElement>({
  value,
  defaultValue,
  finalValue,
  type,
  onChange,
}: UseInputStateConfig<T, E>): [T, React.ChangeEventHandler<E>] {
  const [controlledValue, setControlledValue] = useState<T>(
    value ?? defaultValue ?? finalValue,
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<E>) => {
      if (value === undefined) {
        if (type === "checkbox") {
          // @ts-ignore
          setControlledValue(e.target.checked as T);
        } else {
          // @ts-ignore
          setControlledValue(e.target.value as T);
        }
      }
      onChange?.(e);
    },
    [value, type, onChange],
  );

  return [controlledValue, handleChange];
}
