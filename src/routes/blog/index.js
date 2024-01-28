const express =  require("express");
const getBlogs = require("../../api/blog/getBlogs");
const getSingleBlog = require("../../api/blog/getSingleBlog");
const router = express.Router();

router.get("/blogs", getBlogs)
router.get("/blog/:id", getSingleBlog)


module.exports = router;