const express =  require("express");
const postAcomment = require("../../api/comment/postAcomment");
const getComment = require("../../api/comment/getComment");
const router = express.Router();

router.post("/comment", postAcomment)
router.get("/cooments/:id", getComment)


module.exports = router;