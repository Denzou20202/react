import {useEffect, useState} from "react";
import type IPostModel from "../../models/IPostModel.tsx";
import {loadPosts} from "../../services/api.service.ts";
import {PostComponent} from "../post/PostComponent.tsx";
import "./PostsStyle.css"

export const PostsComponents = () => {
  const [posts, setPosts] = useState<IPostModel[]>([])
  useEffect(() => {
    async function fetchPosts () {
      const allPosts = await loadPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div className="posts">
      {
        posts.map(post => <PostComponent post={post} key={post.id}/>)
      }
    </div>
  );
};