const blogs = require("../../models/blog");

const getBlogs = async (req, res) => {
  const result = await blogs.find();
  res.send(result);
};

module.exports = getBlogs;
