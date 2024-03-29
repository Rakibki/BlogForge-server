const { model, Schema } = require("mongoose");

const blogSchema = new Schema({
  userId: {
    type: String,
    // required: true,
  },
  Id: {
    type: Number,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  body: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
});

const blogs = model("blogs", blogSchema);

module.exports = blogs;
