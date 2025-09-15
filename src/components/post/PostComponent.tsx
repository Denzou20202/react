import type {FC} from "react";
import type IPostModel from "../../models/IPostModel.tsx";
import "./PostStyle.css"

type PropsPost = {
  post: IPostModel
}

export const PostComponent:FC<PropsPost> = ({post: {title, body, reactions, views}}) => {
  return (
    <div className="post">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="reactions">
        <p>👍{reactions.likes}</p>
        <p>👎{reactions.dislikes}</p>
        <p>👀{views}</p>
      </div>
    </div>
  );
};