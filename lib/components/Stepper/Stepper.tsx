import { forwardRef, useCallback } from "react";

import {
  stepperLabelCva,
  stepperButtonCva,
  stepperContainerCva,
} from "./Stepper.styles";
import { StepperProps } from "./Stepper.types";

import { Plus, Minus } from "@/icons";

import { useControlledState, useInputId } from "@/hooks";

import { cn } from "@/utils";

const Stepper = forwardRef<HTMLInputElement, StepperProps>(function (
  {
    id,
    name,
    label,
    min,
    max,
    size = "normal",
    variant = "normal",
    action = "increment",
    value,
    defaultValue,
    className,
    onChange,
  },
  ref,
) {
  const inputId = useInputId("stepper", id);
  const [cValue, setCValue] = useControlledState({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  const handleChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setCValue(
        (action === "increment" && max
          ? Math.min(cValue + 1, max)
          : cValue + 1) ||
          (action === "decrement" && min
            ? Math.max(cValue - 1, min)
            : cValue - 1),
      );
    },
    [min, max, action, cValue, setCValue],
  );

  const Icon = action === "increment" ? Plus : Minus;
  return (
    <div className={cn(stepperContainerCva({ variant, size, className }))}>
      <label
        htmlFor={inputId}
        className={cn(stepperLabelCva({ variant, size }))}
      >
        {label || (action === "increment" ? "Add" : "Remove")}
      </label>
      <button
        type="button"
        className={cn(stepperButtonCva({ variant, size }))}
        onClick={handleChange}
      >
        <Icon
          strokeWidth={4}
          className={size === "normal" ? "h-6 w-6" : "h-4.5 w-4.5"}
        />
      </button>
      <input
        hidden
        type="number"
        className="hidden"
        ref={ref}
        name={name}
        id={inputId}
        value={cValue}
      />
    </div>
  );
});

export default Stepper;

// interface StepperDoubleProps
//   extends Omit<
//     React.PropsWithChildren<StepperProps>,
//     "variant" | "onDecrement" | "onIncrement"
//   > {
//   onChange?: (value: number) => void;
// }

// function StepperDouble({ id, label, container, children }: StepperDoubleProps) {
//   const renderInsideContainer = () => {
//     return (
//       <div className="flex flex-row items-center overflow-hidden rounded-4 border-0.5 border-contra-black text-contra-black">
//         <button
//           type="button"
//           className="bg-contra-white py-2.5 pl-2.5 pr-2"
//           // onClick={handleDecrement}
//         >
//           <Minus strokeWidth={4} className="h-6 w-6" />
//         </button>
//         <label
//           htmlFor={id}
//           className="inline-flex min-w-12 items-center justify-center self-stretch bg-contra-yellow text-6 font-extrabold leading-7"
//         >
//           {label}
//         </label>
//         <button
//           type="button"
//           className="bg-contra-white py-2.5 pl-2 pr-2.5"
//           // onClick={handleIncrement}
//         >
//           <Plus strokeWidth={4} className="h-6 w-6" />
//         </button>
//         {children}
//       </div>
//     );
//   };

//   const renderOutsideContainer = () => {
//     return (
//       <div className="flex flex-row items-center gap-x-3 text-contra-black">
//         <label htmlFor={id} className="text-9 font-extrabold leading-10">
//           {label}
//         </label>
//         <div className="flex flex-row flex-nowrap items-center overflow-hidden">
//           <button
//             type="button"
//             className="flex h-12 w-12 items-center justify-center rounded-l-4 border-y-0.5 border-l-0.5 border-r-0.25 border-contra-black bg-contra-yellow"
//             // onClick={handleDecrement}
//           >
//             <Minus strokeWidth={4} className="h-6 w-6" />
//           </button>
//           <button
//             type="button"
//             className="flex h-12 w-12 items-center justify-center rounded-r-4 border-y-0.5 border-l-0.25 border-r-0.5 border-contra-black bg-contra-yellow"
//             // onClick={handleIncrement}
//           >
//             <Plus strokeWidth={4} className="h-6 w-6" />
//           </button>
//         </div>
//         {children}
//       </div>
//     );
//   };

//   return container === "inside"
//     ? renderInsideContainer()
//     : renderOutsideContainer();
// }
