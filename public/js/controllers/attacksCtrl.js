var app = angular.module('hoodPopes');



app.controller('attacksCtrl', function($scope, attacksService) {
    
    $scope.getTH5attacks = function() {
        attacksService.getAttacks(5).then(function(response) {
            $scope.th5Attacks = response;
        });
    }
    
    $scope.getTH6attacks = function() {
        attacksService.getAttacks(6).then(function(response) {
            $scope.th6Attacks = response;
        });
    }
        
    $scope.getTH7attacks = function() {
        attacksService.getAttacks(7).then(function(response) {
            $scope.th7Attacks = response;
        });
    }
            
    $scope.getTH8attacks = function() {
        attacksService.getAttacks(8).then(function(response) {
            $scope.th8Attacks = response;
        });
    }
                
    $scope.getTH9attacks = function() {
        attacksService.getAttacks(9).then(function(response) {
            $scope.th9Attacks = response;
        });
    }
    
    
    /*
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
    */
    $scope.fiveShowing = false;
    
    $scope.sixShowing = false;
    
    $scope.sevenShowing = false;
    
    $scope.eightShowing = false;
    
    $scope.nineShowing = false;
    
    
})