const blogs = require("../../models/blog");

const myBlogs = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await blogs.find({ userId: userId });
    res.send(result);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = myBlogs;
