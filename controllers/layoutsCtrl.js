var Layout = require('../models/layoutsModel.js');


module.exports = {
    
    getLayouts: function(req,res,next) {
        
        var layoutsArr = [];
        
        for (var i = 0; i < Layout.length; i++) {
            
            if (Layout[i].thLevel == req.query.id) {
                layoutsArr.push(Layout[i]);
            }
        }
        
        res.status(200).json(layoutsArr);
    }
    
    
    
}