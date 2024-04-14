import React from "react";
import Player from "./player";
import players from "../players";

const PlayerList = () => {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;
