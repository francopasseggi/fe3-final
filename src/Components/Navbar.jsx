import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);
  const { theme } = state;

  const style = {
    color: theme === 'light' ? 'black' : 'white'
  }

  return (
    <nav>
      <button
        // className={`theme-button ${theme === 'light' ? 'light' : 'dark'}`}
        onClick={toggleTheme}
      >
        Change theme
      </button>

      <Link style={style} to="/">Home</Link>
      <Link style={style} to="/contact">Contact</Link>
      <Link style={style} to="/favs">Favorites</Link>

    </nav >
  );
};

export default Navbar;
