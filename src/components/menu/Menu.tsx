import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <NavLink to="/users/jsonplaceholder">Users (JSONPlaceholder)</NavLink>
        <NavLink to="/users/dummyjson">Users (DummyJSON)</NavLink>
        <NavLink to="/posts/jsonplaceholder">Posts (JSONPlaceholder)</NavLink>
        <NavLink to="/posts/dummyjson">Posts (DummyJSON)</NavLink>
        <NavLink to="/comments/jsonplaceholder">Comments (JSONPlaceholder)</NavLink>
      </nav>
    </div>
  );
};

export default Menu;