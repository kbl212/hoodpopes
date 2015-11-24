var mongoose = require('mongoose');


var newsSchema = new mongoose.Schema({
    
    date: {type: Date, required: true},
    author: {type: String, required: true},
    message: {type: String, required: true}
    
});







module.exports = mongoose.model('Post', newsSchema);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*[
    {
        date: '11/20/2015',
        author: 'EsteGuey',
        message: 'Town Hall 11 coming in just a few weeks! Stay tuned for more details...'
    },
    
    {
        date: '11/22/2015',
        author: 'Supercell',
        message: '<a href="clashofclans.com">clashofclans.com</a> has just been released! (before that, they only had a page off of Supercell\'s main page).'
    }
]
*/