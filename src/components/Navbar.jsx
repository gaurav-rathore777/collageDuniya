import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ marginTop: '0.5rem' }}>
      <NavLink to="/" style={{ marginRight: '1rem' }}>Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
