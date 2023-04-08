import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const isInFavorites = state.favorites.some((fav) => fav.id === id);
    if (!isInFavorites) {
      dispatch({ type: 'ADD_FAV', payload: { id, name, username } });
    }
  }

  const isInFavorites = state.favorites.some((fav) => fav.id === id)

  return (

    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <p>{username}</p>
      </Link >
      {!isInFavorites &&
        <button onClick={addFav} className="favButton">Add fav</button>
      }
    </div>

  );
};

export default Card;
