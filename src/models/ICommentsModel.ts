import type {ICommentModel} from "./ICommentModel.ts";

export interface ICommentsModel {
  comments: ICommentModel[]
  total: number
  skip: number
  limit: number
}