import type {ICommentModel} from "../models/ICommentModel.ts";

const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments'

const loadComments = async (): Promise<ICommentModel[]> => {
  const response = await fetch(endpointComments)
    .then(value => value.json())

  return response.comments
}

export {loadComments}