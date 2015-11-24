var app = angular.module('hoodPopes');


app.service('attacksService', function($http) {
    /*
        $scope.getTH5attacks = function() {
        $scope.th5Attacks = mainService.getAttacks(5);
        
    } */
    
        this.getAttacks = function(thLevel) {
            return $http.get('/api/attacks?id=' + thLevel).then(function(response) {
                console.log(response);
                return response;
            });
        };
    
    
    
    
    
    
    
    
    
    
    
  /*  
        this.Attack = function(name, thLevel, unitsUsed, attackLink) {
        
        this.name = name;
        this.thLevel = thLevel;
        this.unitsUsed = unitsUsed;
        this.attackLink = attackLink;
        return this;
        
    }

    */
    
    
    
});