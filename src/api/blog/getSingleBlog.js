const blogs = require("../../models/blog");

const getSingleBlog = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send("Invalid blog ID");
  }
  const blog = await blogs.findOne({
    Id: parseInt(id),
  });
  res.send(blog);
};

module.exports = getSingleBlog;
