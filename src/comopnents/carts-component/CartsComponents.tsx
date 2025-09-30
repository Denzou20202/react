import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICartsResponse} from "../../models/ICartsResponse.ts";
import type {ICart} from "../../models/ICart.ts";
import {cartService} from "../../services/api.services.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";


export const CartsComponents = () => {

  const {id} = useParams()
  const [carts, setCarts] = useState<ICart[]>([])
  useEffect(() => {
    if (id) {
      cartService.getCartsOfUser(id)
        .then(({carts}:ICartsResponse) => {
          setCarts(carts)
        });
    }
  }, [id])
  return (
    <div>
      {
        carts.map((cart:ICart) => <CartComponent key={cart.id} cart={cart}/>        )
      }
    </div>
  );
};