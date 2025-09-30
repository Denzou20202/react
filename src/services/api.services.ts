import type {IUsersResponse} from "../models/IUsersResponse.ts";
import type {ICartsResponse} from "../models/ICartsResponse.ts";

const baseUrl = 'https://dummyjson.com'

export const userService = {
  getAllUsers: async (): Promise<IUsersResponse> => {
    return await fetch(baseUrl+'/users')
      .then(value => value.json())
  }
}

export const cartService = {
  getCartsOfUser: async (userId: string): Promise<ICartsResponse> => {
    return await fetch(baseUrl + '/carts/user/' + userId)
      .then(res => res.json())
  }
}