const users = require("../../models/user");
const UUID = require("uuid-int");

const createUser = async (req, res) => {
  const data = req.body;
  const id = 0;
  const generator = UUID(id);
  const user = {
    ...data,
    userId: generator.uuid(),
  };
  const isUser = await users.findOne({ email: data?.email });
  if (isUser) {
    res.send("already create user");
  } else {
    const result = await users.create(user);
    res.send(result);
  }
};

module.exports = createUser;
