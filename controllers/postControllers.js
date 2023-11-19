const Post = require('../models/Post');
exports.getAllPosts = async (req,res,next) => {
    
    try {
        let query = Post.find({});
       const page = parseInt(req.query.page) || 1;
       const pageSize = parseInt(req.query.limit) || 12;
       const skip = (page - 1) * pageSize;
       const total = await Post.countDocuments();
       const pages = Math.ceil(total/pageSize);
       query = query.skip(skip).limit(pageSize);
       const result = await query;

       if(page > pages) {
        return res.status(404).json({
            status: "fail",
            message: "No page found"
        })
       }
       res.status(200).json({
            count: result.length,
            status: 'success',
            page,
            pages,
            data:result


       })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: "Server Error"
        })
    }
}
exports.test = async(req, res, next) => {
    res.send('Hello')
}