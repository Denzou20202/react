import type {IUser} from "./IUser.ts";

export interface IUsersResponse {
  total: number,
  limit: number,
  skip: number,
  users: IUser[]
}