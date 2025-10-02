import {Link} from "react-router-dom";

const Menu = () => {
  return (

    <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
      <h2>Меню</h2>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
      </ul>
    </nav>

  );
};

export default Menu;