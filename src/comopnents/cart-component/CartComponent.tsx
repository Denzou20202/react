import type {FC} from "react";
import type {ICart} from "../../models/ICart.ts";

interface PropsCart {
  cart: ICart
}

export const CartComponent:FC<PropsCart> = ({cart}) => {
  return (
    <div>
      <div>
        <p>total: {cart.total}</p>
        <p>discountedTotal: {cart.discountedTotal}</p>
      </div>
    </div>
  );
};