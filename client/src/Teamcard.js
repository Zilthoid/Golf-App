import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001";

const Teamcard = (props) => {
  const [players, setPlayers] = useState([]);

  const GetTeamplayers = () => {
    fetch(API_BASE + "/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log("Error: ", err));
    console.log(players.team_id);
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
    GetTeamplayers();
  }, []);

  return (
    <div className="team-players-container">
      <div className="team-playercards-container">
        <h1>Flight {props.flightNumber}</h1>
        {players.map((player) => (
          <div className="team-playercards" key={player.team_id}>
            <div className="name">Player name: {player.name} </div>
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

export default Teamcard;
