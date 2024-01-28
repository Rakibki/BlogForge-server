const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  blogId: {
    type: Number,
    // required: true,
  },
  id: {
    type: Number,
    // required: true,
  },
  name: {
    // required: true,
    type: String,
  },
  email: {
    type: String,
    // required: true,
  },
  body: {
    type: String,
    // required: true,
  },
});

const comments = model("comments", commentSchema);

module.exports = comments;
