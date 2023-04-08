import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { favorites, theme } = state;

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Favs</h1>
      <div className="card-grid">
        {favorites.map((favorite) => (
          <Card key={favorite.id} {...favorite} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
