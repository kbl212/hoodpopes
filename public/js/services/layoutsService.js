var app = angular.module('hoodPopes');


app.service('layoutsService', function($http) {

        this.getLayouts = function(thLevel) {
            return $http.get('/api/layouts?id=' + thLevel).then(function(response) {
                console.log(response);
                return response.data;
            });
        };
});