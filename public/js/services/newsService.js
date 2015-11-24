var app = angular.module('hoodPopes');


app.service('newsService', function($http) {
    
    
    this.getAllPosts = function() {
        return $http.get('/api/news' + thLevel).then(function(response) {
           console.log("this is response data ", response.data);
           return response.data;
        });
    }
    
});