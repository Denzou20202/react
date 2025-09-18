import type {FC} from "react";
import type {IReview} from "../../models/IReview.tsx";
type PropsReview = {
  review: IReview
}


export const Review:FC<PropsReview> = ({review:{
  rating,
  comment,
  date,
  reviewerName,
  reviewerEmail
}}) => {
  return (
    <ul>
      <li>⭐{rating}</li>
      <li>{reviewerName}</li>
      <li>{comment}</li>
      <li>{reviewerEmail}</li>
      <li>{date}</li>
    </ul>
  );
};