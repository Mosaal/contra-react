import { forwardRef } from "react";

import { creditCardCva } from "./CreditCard.styles";
import { CreditCardProps } from "./CreditCard.types";

import { cn } from "@/utils";

const CARD_NUMBER_PLACEHOLDER = [
  Array(4).fill("\u2731").join(""),
  Array(4).fill("\u2731").join(""),
  Array(4).fill("\u2731").join(""),
  Array(4).fill("\u2731").join(""),
].join(" ");

const CreditCard = forwardRef<HTMLDivElement, CreditCardProps>(function (
  {
    cardNumber,
    cardHolder,
    cardTitle,
    cardHolderTitle,
    raised = false,
    className,
    ...props
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(creditCardCva({ raised, className }))}
      {...props}
    >
      <span className="mb-12.5 block text-5.25 font-medium leading-7">
        {cardTitle || "Credit Card"}
      </span>
      <div className="mb-9.5 flex flex-row items-center justify-between gap-x-8.5">
        <div className="h-11 w-16.5 overflow-hidden rounded-1.5 bg-contra-white" />
        <span className="text-5.25 font-extrabold leading-7">
          {cardNumber || CARD_NUMBER_PLACEHOLDER}
        </span>
      </div>
      <div className="flex flex-row items-end">
        {cardHolder && (
          <div>
            <span className="block text-3 font-medium uppercase leading-4">
              {cardHolderTitle || "Card Holder"}
            </span>
            <span className="block text-5.25 font-extrabold leading-7">
              {cardHolder}
            </span>
          </div>
        )}
        <div className="mb-2.5 ml-auto h-7.5 w-23.25 bg-contra-black opacity-50"></div>
      </div>
    </div>
  );
});

export default CreditCard;
