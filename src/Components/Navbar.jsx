import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <nav className={theme}>
      <button
        className={`theme-button ${theme === 'light' ? 'light' : 'dark'}`}
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
