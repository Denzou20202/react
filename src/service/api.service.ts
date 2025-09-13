import type {IPostModule} from "../modules/IPostModule.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'

const loadPosts = async ():Promise<IPostModule[]> => {
  return await fetch(endpointPosts)
    .then(value => value.json())
}

export {loadPosts}