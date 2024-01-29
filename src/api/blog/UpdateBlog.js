const blogs = require("../../models/blog");

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const idNmb = Number(id);
  const data = req.body;
  const result = await blogs.findOneAndUpdate(
    { Id: idNmb },
    {
      $set: {
        title: data?.title,
        body: data?.body,
      },
    }
  );
  res.send(result)
};

module.exports = updateBlog;
