var app = angular.module('hoodPopes');


app.service('attacksService', function($http) {
    
    
        this.Attack = function(name, thLevel, unitsUsed, attackLink) {
        
        this.name = name;
        this.thLevel = thLevel;
        this.unitsUsed = unitsUsed;
        this.attackLink = attackLink;
        return this;
        
    }

    
    
    
    
});