var app = angular.module('hoodPopes');


app.controller('layoutsCtrl', function($scope, layoutsService) {
    
    
    $scope.getTH5layouts = function() {
        layoutsService.getLayouts(5).then(function(response) {
            $scope.th5Layouts = response;
        });
    }
    
    $scope.getTH6layouts = function() {
        layoutsService.getLayouts(6).then(function(response) {
            $scope.th6Layouts = response;
        });
    }
        
    $scope.getTH7layouts = function() {
        layoutsService.getLayouts(7).then(function(response) {
            $scope.th7Layouts = response;
        });
    }
            
    $scope.getTH8layouts = function() {
        layoutsService.getLayouts(8).then(function(response) {
            $scope.th8Layouts = response;
        });
    }
                
    $scope.getTH9layouts = function() {
        layoutsService.getLayouts(9).then(function(response) {
            $scope.th9Layouts = response;
        });
    }
    
    $scope.fiveShowing = false;
    
    $scope.sixShowing = false;
    
    $scope.sevenShowing = false;
    
    $scope.eightShowing = false;
    
    $scope.nineShowing = false;
    
});