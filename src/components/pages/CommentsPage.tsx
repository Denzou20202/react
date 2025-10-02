import {Link} from "react-router-dom";

export const CommentsPage = () => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        <li><Link to="/comments/jsonplaceholder">JsonPlaceholder</Link></li>
        <li><Link to="/comments/dummyjson">DummyJson</Link></li>
      </ul>
    </div>
  );
};