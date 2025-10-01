import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <h2>Меню</h2>
        <ul>
          <li>
            Users
            <ul>
              <li><Link to="/users/jsonplaceholder">JsonPlaceholder</Link></li>
              <li><Link to="/users/dummyjson">DummyJson</Link></li>
            </ul>
          </li>
          <li>
            Posts
            <ul>
              <li><Link to="/posts/jsonplaceholder">JsonPlaceholder</Link></li>
              <li><Link to="/posts/dummyjson">DummyJson</Link></li>
            </ul>
          </li>
          <li>
            Comments
            <ul>
              <li><Link to="/comments/jsonplaceholder">JsonPlaceholder</Link></li>
            </ul>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Menu;