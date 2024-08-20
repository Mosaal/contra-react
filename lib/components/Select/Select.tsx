import { forwardRef } from "react";

import {
  selectCva,
  selectIconCva,
  selectChevronIconCva,
  selectChevronWrapperCva,
} from "./Select.styles";
import type { SelectProps } from "./Select.types";

import { useInputId, useInputState } from "@/hooks";

import { ChevronDown } from "@/icons";

import { cn } from "@/utils";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function (
  {
    id,
    value,
    defaultValue,
    options = [],
    raised = false,
    placeholder,
    disabled,
    leftIcon,
    className,
    selectClassName,
    children,
    onLeftIconClick,
    onChange,
    ...props
  },
  ref,
) {
  const inputId = useInputId("select", id);
  const [selectedValue, setSelectedValue] = useInputState({
    value,
    defaultValue,
    finalValue: "",
    onChange,
  });

  const handleClickIcon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (disabled) return;
    onLeftIconClick?.();
  };

  return (
    <label
      htmlFor={inputId}
      className={cn("cr-inline-block cr-w-85 cr-max-w-full", className)}
    >
      <div className="cr-relative cr-inline-flex cr-w-full">
        {leftIcon && (
          <div
            className={cn(
              selectIconCva({ disabled, clickable: !!onLeftIconClick }),
            )}
            onClick={handleClickIcon}
          >
            {leftIcon}
          </div>
        )}
        <select
          ref={ref}
          id={inputId}
          disabled={disabled}
          value={selectedValue}
          className={cn(
            selectCva({
              raised,
              placeholder: !!placeholder && selectedValue === "",
              className: selectClassName,
            }),
            leftIcon ? "cr-pl-12.5" : "cr-pl-3.5",
          )}
          onChange={setSelectedValue}
          {...props}
        >
          {placeholder && (
            <option disabled selected value="">
              {placeholder}
            </option>
          )}
          {options.length === 0 && children}
          {options.length > 0 &&
            options.map(({ label, ...option }, index) => (
              <option key={`select-option-${inputId}#${index}`} {...option}>
                {label}
              </option>
            ))}
        </select>
        <div className={cn(selectChevronWrapperCva({ disabled }))}>
          <ChevronDown className={cn(selectChevronIconCva({ disabled }))} />
        </div>
      </div>
    </label>
  );
});
