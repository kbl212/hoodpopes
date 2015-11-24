var Post = require('../models/newsModel.js');








module.exports = {
    createPost: function(req,res,next) {
        var newPost = new Post(req.body);
        newPost.save(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    getPosts: function(req,res,next) {
        Post.find().exec(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
            
        });
    }
};