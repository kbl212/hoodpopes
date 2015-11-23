var app = angular.module('hoodPopes');


app.controller('newsCtrl', function($scope) {
    
    $scope.passwordBoxShowing = false;
    
    $scope.thePass = 'hpstunnas';
    
    $scope.isAdmin = false;
    
    $scope.loginClicked = function() {
        if ($scope.isAdmin) {
            alert("You are already logged in!");
        }
        else {
            $scope.passwordBoxShowing = !$scope.passwordBoxShowing;

        }
        
    };
    
    $scope.checkForAdmin = function(password) {
        if (password === $scope.thePass) {
            alert("Welcome, admin!");
            $scope.isAdmin = true;
            $scope.passwordBoxShowing = false;
        }
        else {
            alert("Nope!");
        }
    };
});