import type {ICart} from "./ICart.ts";

export interface ICartsResponse {
  total: number,
  limit: number,
  skip: number,
  carts: ICart[]
}