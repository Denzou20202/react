export interface ICommentModel {
  id: number
  body: string
  postId: number
  likes: number
  user: IUser
}

interface IUser {
  id: number
  username: string
  fullName: string
}
