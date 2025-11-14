import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentsActions} from "../redux/slices/CommentSlice.ts";

export const CommentComponent = () => {


    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);

    useEffect(() => {
      dispatch(commentsActions.loadComments())
    }, []);
  return (
    <>
      {comments.map((comment) => (<div key={comment.id}>
        name : {comment.name}
        <br/>
        body: {comment.body}
        <hr/>
      </div>))}
    </>
  );
};