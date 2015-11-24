var app = angular.module('hoodPopes');


app.service('attacksService', function($http) {

        this.getAttacks = function(thLevel) {
            return $http.get('/api/attacks?id=' + thLevel).then(function(response) {
                console.log(response);
                return response.data;
            });
        };
});