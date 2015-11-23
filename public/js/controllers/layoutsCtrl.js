var app = angular.module('hoodPopes');


app.controller('layoutsCtrl', function($scope) {
    
    var th5Layouts = [
    
    
        {
            name: "TH 5 Layout 1",
            thLevel: 5,
            link: "https://www.youtube.com/embed/m-lXNMM1WrQ"
        }
    
    
    
    
    ];
        var th6Layouts = [
            
            
            {
                name: "TH 6 Layout 1",
                thLevel: 6,
                link: "https://youtu.be/AmJuc22HnxI?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            }
        
        
        
        
        ];
        var th7Layouts = [
        
        
            {
                name: "TH 7 Layout 1",
                thLevel: 7,
                link: "https://youtu.be/W0hVDhVpYvw?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            }
        
        
        
        
        ];
        var th8Layouts = [
        
        
            {
                name: "TH 8 Layout 1",
                thLevel: 8,
                link: "https://youtu.be/EK27k7VMcHI?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
                
            }
        
        
        
        
        ];
        var th9Layouts = [
        
        
            {
                name: "TH 9 Layout 1",
                thLevel: 9,
                link: "https://youtu.be/1yAo_YtKS1s?list=PL6zRJH-HQH-F4sxMJHohkTp1LIn9IdHM_"
            }
        
        
        
        
        ];
    
    $scope.th5 = th5Layouts;
    $scope.fiveShowing = false;
    
        $scope.th6 = th6Layouts;
    $scope.sixShowing = false;
    
        $scope.th7 = th7Layouts;
    $scope.sevenShowing = false;
    
        $scope.th8 = th8Layouts;
    $scope.eightShowing = false;
    
        $scope.th9 = th9Layouts;
    $scope.nineShowing = false;
    
});