const express =  require("express")
const createUser = require("../../api/authentication/createUser");
const currentUser = require("../../api/blog/currentUser");
const router = express.Router();

router.post("/users", createUser)
router.get("/currentUser/:email", currentUser)


module.exports = router;