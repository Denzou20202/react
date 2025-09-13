import type {FC} from "react";
import type {IPostModule} from "../../modules/IPostModule.ts";
import "./PostStyle.css"

type PropsPost = {
  post:IPostModule
}

export const Post:FC<PropsPost> = ({post: {title, body}}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};