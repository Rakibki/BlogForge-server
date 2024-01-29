const UUID = require("uuid-int");
const blogs = require("../../models/blog");


const createBlog = async (req, res) => {
    const id = 0;
    const generator = UUID(id);
    const blogData = req.body;
    const blog = {
        ...blogData,
        Id: generator.uuid(),
    }
    const result = await blogs.create(blog)
    res.send(result)
}


module.exports = createBlog;