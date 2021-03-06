const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Location = mongoose.model("location", LocationSchema);
