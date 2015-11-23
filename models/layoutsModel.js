var mongoose = require('mongoose');



var layoutSchema = new mongoose.Schema({
    
    name: {type: String, required: true},
    thLevel: {type: Number, required: true},
    link: {type: String, required: true}

});

module.exports = mongoose.model('Layout', layoutSchema);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*[

            {
                name: "TH 5 Layout 1",
                thLevel: 5,
                link: "https://www.youtube.com/embed/m-lXNMM1WrQ"
            },

            {
                name: "TH 6 Layout 1",
                thLevel: 6,
                link: "https://youtu.be/AmJuc22HnxI?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            },

            {
                name: "TH 7 Layout 1",
                thLevel: 7,
                link: "https://youtu.be/W0hVDhVpYvw?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            },

            {
                name: "TH 8 Layout 1",
                thLevel: 8,
                link: "https://youtu.be/EK27k7VMcHI?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            },

            {
                name: "TH 9 Layout 1",
                thLevel: 9,
                link: "https://youtu.be/1yAo_YtKS1s?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
            }

]; */