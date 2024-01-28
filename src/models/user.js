const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
});

const users = model("users", userSchema);

module.exports = users
