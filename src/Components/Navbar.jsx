import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { toggleTheme } = useContext(ContextGlobal);

  return (
    <nav
    >
      <button
        onClick={toggleTheme}
      >
        Change theme
      </button>

      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>

    </nav>
  );
};

export default Navbar;
