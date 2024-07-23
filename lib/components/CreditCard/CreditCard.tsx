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
      <span className="contra-mb-12.5 contra-block contra-text-5.25 contra-font-medium contra-leading-7">
        {cardTitle || "Credit Card"}
      </span>
      <div className="contra-mb-9.5 contra-flex contra-flex-row contra-items-center contra-justify-between contra-gap-x-8.5">
        <div className="contra-h-11 contra-w-16.5 contra-overflow-hidden contra-rounded-1.5 contra-bg-white" />
        <span className="contra-text-5.25 contra-font-extrabold contra-leading-7">
          {cardNumber || CARD_NUMBER_PLACEHOLDER}
        </span>
      </div>
      <div className="contra-flex contra-flex-row contra-items-end">
        {cardHolder && (
          <div>
            <span className="contra-block contra-text-3 contra-font-medium contra-uppercase contra-leading-4">
              {cardHolderTitle || "Card Holder"}
            </span>
            <span className="contra-block contra-text-5.25 contra-font-extrabold contra-leading-7">
              {cardHolder}
            </span>
          </div>
        )}
        {cardType && <div className="contra-ml-auto">{cardType}</div>}
      </div>
    </div>
  );
});
