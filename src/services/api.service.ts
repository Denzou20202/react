import type {IUsersResponse} from "../models/IUsersResponse.ts";

const baseUrl = 'https://dummyjson.com'

export const userService = {
  getAllUsers: async (page:string): Promise<IUsersResponse> => {
    const limit = 30
    const skip = limit * (+page) - limit

    return await fetch(baseUrl+'/users' + '?skip=' + skip)
      .then(value => value.json())
  }
}