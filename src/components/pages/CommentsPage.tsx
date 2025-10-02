import {Link} from "react-router-dom";

export const CommentsPage = () => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        <li><Link to="/comments/jsonplaceholder">JsonPlaceholder</Link></li>
      </ul>
    </div>
  );
};