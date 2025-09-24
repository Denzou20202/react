import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <div style={{position: 'fixed', background: 'white', border: '1px solid black'}}>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
        <NavLink to="/users/jsonplaceholder">Users (JSONPlaceholder)</NavLink>
        <NavLink to="/users/dummyjson">Users (DummyJSON)</NavLink>
        <NavLink to="/posts/jsonplaceholder">Posts (JSONPlaceholder)</NavLink>
        <NavLink to="/posts/dummyjson">Posts (DummyJSON)</NavLink>
        <NavLink to="/comments/jsonplaceholder">Comments (JSONPlaceholder)</NavLink>
        <NavLink to="/comments/dummyjson">Comments (DummyJSON)</NavLink>
      </nav>
    </div>
  );
};

export default Menu;