const users = require("../../models/user");

const currentUser = async (req, res) => {
  const email = req.params?.email;
  console.log(email);
  const { userId } = await users.findOne({ email: email });
  res.send({ userId });
};

module.exports = currentUser;
