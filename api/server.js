const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/player", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

const Player = require("./models/player");

app.get("/players", async (req, res) => {
  const players = await Player.find();

  res.json(players);
});

app.post("/player/new", (req, res) => {
  const newPlayer = new Player({
    name: req.body.name,
    hcp: req.body.hcp,
    club: req.body.club,
    team_id: req.body.team_id,
  });

  newPlayer.save();

  res.json(newPlayer);
});

app.delete("/player/delete/:id", async (req, res) => {
  const result = await Player.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.listen(3001, () => console.log("Server started on port 3001"));
