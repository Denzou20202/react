import {useEffect, useState} from "react";
import type IPost from "../../models/IPost.ts";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseModelType} from "../../models/IBaseModelType.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    getAll<IBaseModelType & {posts: IPost[]}>('/posts')
      .then(({posts}) => setPosts(posts))
  }, [])

  return (
    <div>
      {
        posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
      }
    </div>
  );
};