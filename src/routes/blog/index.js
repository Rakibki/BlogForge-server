const express =  require("express");
const getBlogs = require("../../api/blog/getBlogs");
const getSingleBlog = require("../../api/blog/getSingleBlog");
const createBlog = require("../../api/blog/createBlog");
const myBlogs = require("../../api/blog/myBlogs");
const deleteBlog = require("../../api/blog/deleteBlog");
const updateBlog = require("../../api/blog/UpdateBlog");
const router = express.Router();

router.get("/blogs", getBlogs)
router.get("/blog/:id", getSingleBlog)
router.post("/blog", createBlog)
router.get("/myBlogs/:id", myBlogs)
router.delete("/blog/:id", deleteBlog)
router.put("/blog/:id", updateBlog)


module.exports = router;