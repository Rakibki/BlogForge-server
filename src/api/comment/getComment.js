const comments = require("../../models/conmment");



const getComment = async (req, res) => {
    const id = req?.params?.id;
    const filter = {blogId: id};
    const result = await comments.find(filter)
    res.send(result)
}


module.exports = getComment;