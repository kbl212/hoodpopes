var app = angular.module('hoodPopes', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/homeTmpl.html',
        controller: 'homeCtrl'
        
        
    })
    
    .state('attacks', {
        url: '/attacks',
        templateUrl: 'templates/attacksTmpl.html',
        controller: 'attacksCtrl'
        
    })
    
    .state('layouts', {
        url: '/layouts',
        templateUrl: 'templates/layoutsTmpl.html',
        controller: 'layoutsCtrl'

    })
    
    .state('news', {
        url: '/news',
        templateUrl: 'templates/newsTmpl.html',
        controller: 'newsCtrl'
    })
    
    
    $urlRouterProvider
        .otherwise('/home');
    
    
    
    
    
    
    
});