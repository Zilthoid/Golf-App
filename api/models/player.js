const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hcp: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  team_id: {
    type: String,
    required: true,
  },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
