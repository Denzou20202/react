import {useEffect, useState} from "react";
import type {IPostModule} from "../../modules/IPostModule.ts";
import {loadPosts} from "../../service/api.service.ts";
import {Post} from "../post/Post.tsx";

export const Posts = () => {
  const [posts, setPosts] = useState<IPostModule[]>([])
  useEffect(() => {
    loadPosts().then(value => setPosts(value))
  }, [])
  return (
    <div>
      {
        posts.map(post => <Post post={post} key={post.id}/> )
      }
    </div>
  );
};