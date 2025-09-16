import {useEffect, useState} from "react";
import type {ICommentModel} from "../../models/ICommentModel.ts";
import {loadComments} from "../../service/api.service.ts";
import {Comment} from "../CommentComponent/Comment.tsx";

export const Comments = () => {
  const [items, setItems] = useState<ICommentModel[]>([])

  useEffect(() => {
    async function fetchComments () {
      const allComments = await loadComments()
      setItems(allComments)
    }
    fetchComments()
  }, [])

  return (
    <div>
      {
        items.map(item => <Comment item={item} key={item.id}/>)
      }
    </div>
  );
};