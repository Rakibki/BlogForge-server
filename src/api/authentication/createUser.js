const users = require("../../models/user");

const createUser = async (req, res) => {
  const data = req.body;
  const isUser = await users.findOne({ email: data?.email });
  if (isUser) {
    res.send("already create user");
  } else {
    const result = await users.create(data);
    res.send(result);
  }
};

module.exports = createUser;
