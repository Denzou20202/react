import type IPostModel from "../models/IPostModel.tsx";
import type {IPostsModel} from "../models/IPostsModel.tsx";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'

const loadPosts = async (): Promise<IPostModel[]> => {
  const respons:IPostsModel = await fetch(endpointPosts)
    .then(value => value.json())

  return respons.posts
}

export {loadPosts}