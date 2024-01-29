const comments = require("../../models/conmment");

const postAcomment = async (req, res) => {
  const commentData = req.body;
  const result = await comments.create(commentData);
  res.send(result);
};

module.exports = postAcomment;
