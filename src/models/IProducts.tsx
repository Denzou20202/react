import type {IProduct} from "./IProduct.tsx";

export interface IProducts {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}