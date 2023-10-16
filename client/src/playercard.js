import { useState, useEffect } from "react";
import "./Playercard.css";

const API_BASE = "http://localhost:3001";

const Playercard = () => {
  const [players, setPlayers] = useState([]);

  const GetPlayers = () => {
    fetch(API_BASE + "/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log("Error: ", err));
  };

  const deletePlayer = async (_id) => {
    const data = await fetch(API_BASE + "/player/delete/" + _id, {
      method: "DELETE",
    }).then((res) => res.json());

    setPlayers((players) =>
      players.filter((player) => player._id !== data._id)
    );
  };

  useEffect(() => {
    GetPlayers();
  }, []);

  return (
    <div className="players-container">
      <div className="playercards-container">
        <h1>Players</h1>
        {players.map((player) => (
          <div className="playercards" key={player._id}>
            <div className="name">Player name: {player.name} </div>
            <div className="hcp">Player HCP: {player.hcp}</div>
            <div className="club">Player Club: {player.club}</div>
            <div
              className="delete-player"
              onClick={() => deletePlayer(player._id)}
            >
              x
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playercard;
