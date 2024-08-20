import { forwardRef } from "react";

import { CARD_NUMBER_PLACEHOLDER, creditCardCva } from "./CreditCard.styles";
import type { CreditCardProps } from "./CreditCard.types";

import { cn } from "@/utils";

export const CreditCard = forwardRef<HTMLDivElement, CreditCardProps>(function (
  {
    cardNumber,
    cardHolder,
    cardType,
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
      <span className="cr-text-xl cr-mb-12.5 cr-block cr-font-medium cr-leading-7">
        {cardTitle || "Credit Card"}
      </span>
      <div className="cr-mb-9.5 cr-flex cr-flex-row cr-items-center cr-justify-between cr-gap-x-8.5">
        <div className="cr-rounded-4xs cr-h-11 cr-w-16.5 cr-overflow-hidden cr-bg-white" />
        <span className="cr-text-xl cr-whitespace-nowrap cr-font-extrabold cr-leading-7">
          {cardNumber || CARD_NUMBER_PLACEHOLDER}
        </span>
      </div>
      <div className="cr-flex cr-flex-row cr-items-end">
        {cardHolder && (
          <div>
            <span className="cr-text-sm cr-block cr-font-medium cr-uppercase cr-leading-4">
              {cardHolderTitle || "Card Holder"}
            </span>
            <span className="cr-text-xl cr-block cr-font-extrabold cr-leading-7">
              {cardHolder}
            </span>
          </div>
        )}
        {cardType && <div className="cr-ml-auto">{cardType}</div>}
      </div>
    </div>
  );
});
