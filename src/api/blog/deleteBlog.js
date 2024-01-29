const blogs = require("../../models/blog");

const deleteBlog = async (req, res) => {
  const id = await req?.params?.id;
  const blogId = Number(id);
  const result = await blogs.deleteOne({ Id: blogId });
  res.send(result);
};

module.exports = deleteBlog;
