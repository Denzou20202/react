import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentsActions} from "../redux/slices/CommentSlice.ts";
import {useEffect} from "react";

export const ComplexComponent = () => {

  const dispatch = useAppDispatch();
  const {
    userStoreSlice:{users},
    postStoreSlice:{posts},
    commentStoreSlice:{comments}
  } = useAppSelector(state => state)

  useEffect(() => {
    if (!users.length) {
      dispatch(userActions.loadUsers())
    }
    if (!posts.length) {
      dispatch(postActions.loadPosts())
    }
    if (!comments.length) {
      dispatch(commentsActions.loadComments())
    }
  }, [])
  return (
    <div>
      <h2>All users are:</h2>  <br/>
      {users.map(user =>(<div key={user.id}>{user.name}</div>))} <br/>
      <h2>All posts are:</h2> <br/>
      {posts.map(post =>(<div key={post.id}>Post title {post.title} <hr/> </div>))} <br/>
      <h2>All comments are:</h2> <br/>
      {comments.map(comment =>(<div key={comment.id}>Name: {comment.name}
      <br/>Body: {comment.body} <hr/> </div>))}
    </div>
  );
};