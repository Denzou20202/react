import type {FC} from "react";
import type {ICommentModel} from "../../models/ICommentModel.ts";

type CommentProps = {
  item: ICommentModel
}

export const Comment:FC<CommentProps> = ({item: {postId, body, likes ,user}}) => {
  return (
    <div className="border-2">
      <h2 className="font-bold">{user.fullName}</h2>
      <p>login: {user.username}</p>
      <p>postId: {postId}</p>
      <h3 className="text-2xl">{body}</h3>
      <p>👍{likes}</p>
    </div>
  );
};