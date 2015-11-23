var Attack = require('../models/attacksModel.js');



module.exports = {
    
    getAttacks: function(req,res,next) {
       // console.log("this is supposedly ATTACK: " + Attack[0].thLevel);
       // console.log("query ID = " + req.query.id);
        var attacksArr = [];
       // console.log("this is ATTACK length..." + Attack.length);
        for (var i = 0; i < Attack.length; i++) {
            if (Attack[i].thLevel == req.query.id) {
                attacksArr.push(Attack[i]);
            };
        };
       // console.log("this is FINAL attacksArr: " + attacksArr);
        res.status(200).json(attacksArr);
    }
}