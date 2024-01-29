const express =  require("express");
const getBlogs = require("../../api/blog/getBlogs");
const getSingleBlog = require("../../api/blog/getSingleBlog");
const createBlog = require("../../api/blog/createBlog");
const myBlogs = require("../../api/blog/myBlogs");
const router = express.Router();

router.get("/blogs", getBlogs)
router.get("/blog/:id", getSingleBlog)
router.post("/blog", createBlog)
router.get("/myBlogs/:id", myBlogs)


module.exports = router;