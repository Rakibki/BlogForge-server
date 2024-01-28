const users = require("../../models/user");



const createUser = async (req, res) => {
    const data = req.body; 
    const user = await users.findOne({email: data?.email});
    if(user) {
        res.send("already create user")
    }else {
        const result = await users.create(data);
        res.send(result)
    }
}


module.exports = createUser;