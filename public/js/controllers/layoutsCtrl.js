var app = angular.module('hoodPopes');


app.controller('layoutsCtrl', function($scope) {
    
    var th5Layouts = ["testing", "testing2", "testing3"];
        var th6Layouts = ["testing", "testing2", "testing3"];
        var th7Layouts = ["testing", "testing2", "testing3"];
        var th8Layouts = ["testing", "testing2", "testing3"];
        var th9Layouts = ["testing", "testing2", "testing3"];
    
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