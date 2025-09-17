import type {IProduct} from "../models/IProduct.tsx";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products'

const loadProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(endpointProducts)
    .then(value => value.json())

  return response.products
}

export {loadProducts}