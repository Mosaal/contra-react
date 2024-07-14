import type { VariantProps } from "class-variance-authority";

import { creditCardCva } from "./CreditCard.styles";

export type CreditCardBaseProps = React.ComponentProps<"div">;

export type CreditCardVariantProps = VariantProps<typeof creditCardCva>;

export interface CreditCardProps
  extends CreditCardBaseProps,
    CreditCardVariantProps {
  cardNumber?: string;
  cardHolder?: string;
  cardType?: React.ReactNode;
  cardTitle?: React.ReactNode;
  cardHolderTitle?: React.ReactNode;
}
