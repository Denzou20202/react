import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../redux/slices/PostSlice.ts";
import type {IPost} from "../models/IPost.ts";

export const PostComponent = () => {

  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.postStoreSlice.posts);

  useEffect(() => {
    dispatch(postActions.loadPosts())
  }, []);

  return (
    <>
      {posts.map((post:IPost) => (<div key={post.id}>
        <p>Title: {post.title}</p>
        <br/>
        <p>Body: {post.body}</p>
        <hr/>
      </div>))}
    </>
  );
};