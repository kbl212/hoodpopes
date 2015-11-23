var Posts = require('../models/newsModel.js');








module.exports = {
    createPost: function(req,res,next) {
        Posts.push(req.body);
    
        res.status(200).json(Posts);
    },
    
    getPosts: function(req,res,next) {
        
        res.status(200).json(Posts);
    }
};