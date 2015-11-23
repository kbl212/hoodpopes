var app = angular.module('hoodPopes');



app.controller('attacksCtrl', function($scope, attacksService) {
    
    
    
    
        var th5attacks = [
        
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
                
            }

        ];
        var th6attacks = [
        
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
            }
        ];
        var th7attacks = [
        
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
        
            }
        ];
        var th8attacks = [
            
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
            }
        ];
    
        var th9attacks = [
        
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
        
        
        ];
    
    $scope.th5 = th5attacks;
    $scope.fiveShowing = false;
    
        $scope.th6 = th6attacks;
    $scope.sixShowing = false;
    
        $scope.th7 = th7attacks;
    $scope.sevenShowing = false;
    
        $scope.th8 = th8attacks;
    $scope.eightShowing = false;
    
        $scope.th9 = th9attacks;
    $scope.nineShowing = false;
    
    
})