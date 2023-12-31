const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema= new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    author: {
        type: String,
        required: [true, 'Please provide an author']
    },
    body: {
        type: String,
        required: [true, 'Please provide a body']
    }

})
const Post = mongoose.model('Post', postSchema);
module.exports = Post;