const express =  require("express")
const createUser = require("../../api/authentication/createUser");
const router = express.Router();

router.post("/users", createUser)


module.exports = router;