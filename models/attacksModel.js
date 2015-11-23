var mongoose = require('mongoose');


var attackSchema = new mongoose.Schema({
    
    name: {type:String, required: true},
    thLevel: {type: Number, required: true},
    unitsUsed: {type: Array, required: true},
    link: {type: String, required: true}
    
});


module.exports = mongoose.model('Attack', attackSchema);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*[

    
            {
                name: "Giants/Barbs/Archers",
                thLevel: 5,
                unitsUsed: ["Giants", "Barbarians", "Archers"],
                link: "https://www.youtube.com/watch?v=gJkbHJKraew"
            },
            
            {
                name: "Mass Balloons",
                thLevel: 4,
                unitsUsed: ["Balloons", "Wizards"],
                link: "https://www.youtube.com/watch?v=z1bQKu-k0fg"
                
            },

        
            {
                name: "Giants/Wizards/Healer",
                thLevel: 6,
                unitsUsed: ["Giants", "Wizards", "Healers", "Wall Breakers"],
                link: "https://www.youtube.com/watch?v=28fhcnJ_l-U"
                
            },
            
            {
                name: "Blarch (Balloons/Archers)",
                thLevel: 6,
                unitsUsed: ["Balloons", "Archers"],
                link: "https://www.youtube.com/watch?v=YT9G8h7BB5I"
            },
        
            {
                name: "Mass Dragons (Strategic Dragon Attack)",
                thLevel: 7,
                unitsUsed: ["Dragons"],
                link: "https://www.youtube.com/watch?v=0rWN9FLMGT4"
            },
            
            {
                name: "Giants/Wizards/Healers",
                thLevel: 7,
                unitsUsed: ["Giants", "Wizards", "Healers"]
        
            },
            
            {
                name: "Hog Rider Rush",
                thLevel: 8,
                unitsUsed: ["Hogs", "Archers", "Wizards", "Barbarian King"],
                link: "https://youtu.be/29XjUFmmdik?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
            },
            
            {
                name: "Dragloon",
                thLevel: 8,
                unitsUsed: ["Dragons", "Balloons"],
                link: "https://youtu.be/1GxeCLzI-90"
            },
            
            {
                name: "GoWiPe",
                thLevel: 8,
                unitsUsed: ["Golems", "Wizards", "Pekkas", "Wall Breakers"],
                link: "https://youtu.be/FGcJOcgg0aQ"
            },
        
            {
                name: "PentaLaLoon",
                thLevel: 9,
                unitsUsed: ["Lava hounds", "Balloons", "Archer Queen", "Barbarian King"],
                link: "https://youtu.be/SRV46vxRLCY?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
            },
            
            {
                name: "Surgical Hogs",
                thLevel: 9,
                unitsUsed: ["Hog Riders"],
                link: "https://youtu.be/KXN12TKkNpI"
            },
            
            {
                name: "GoWiPe",
                thLevel: 9,
                unitsUsed: ["Golems", "Wizards", "Pekkas", "Wall Breakers"],
                link: "https://youtu.be/Bi_jIgjMzkE"
            },
            
            {
                name: "Shattered LaLoon (GoLaLoon)",
                thLevel: 9,
                units: ["Golems", "Wizards", "Lava hounds", "Balloons", "Archer Queen", "Barbarian King"],
                link: "https://youtu.be/-gycxu61iGI?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            }
];*/