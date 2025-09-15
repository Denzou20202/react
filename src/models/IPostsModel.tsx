import type IPostModel from "./IPostModel.tsx";

export interface IPostsModel {
  posts: IPostModel[]
  total: number
  skip: number
  limit: number
}