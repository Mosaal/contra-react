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
          setControlledValue(
            (e.target as unknown as HTMLInputElement).checked as T,
          );
        } else {
          setControlledValue(
            (e.target as unknown as HTMLInputElement).value as T,
          );
        }
      }
      onChange?.(e);
    },
    [value, type, onChange],
  );

  return [controlledValue, handleChange];
}
