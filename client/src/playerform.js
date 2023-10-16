import { useState } from "react";
import "./Playerform.css";

const API_BASE = "http://localhost:3001";

const Playerform = () => {
  const [name, setName] = useState("");
  const [hcp, setHcp] = useState("");
  const [club, setClub] = useState("");

  function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let randomID = rndNumber(1, 5);

  const handleSubmit = async (e) => {
    const data = await fetch(API_BASE + "/player/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        hcp: hcp,
        club: club,
        team_id: randomID,
      }),
    }).then((res) => res.json());
  };

  return (
    <div className="playerform">
      <h2>Create a new player</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label>HCP: </label>
        <input
          type="text"
          value={hcp}
          onChange={(e) => setHcp(e.target.value)}
        />{" "}
        <br />
        <label>Club: </label>
        <input
          type="text"
          value={club}
          onChange={(e) => setClub(e.target.value)}
        />{" "}
        <br />
        <input className="s_button" type="submit" />
      </form>
    </div>
  );
};
export default Playerform;
