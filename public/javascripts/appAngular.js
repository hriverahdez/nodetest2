var linkups_app = angular.module('Links', ['ngRoute', 'ngResource', 'angularModalService']);

linkups_app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/add-inst', {
            templateUrl: 'partials/inst-form.html',
            controller: 'AddInstCtrl'
        })
        .when('/institution/:id', {
            templateUrl: 'partials/inst-form.html',
            controller: 'EditInstCtrl'
        })
        .when('/stats', {
            templateUrl: 'partials/stats.html',
            controller: 'StatsCtrl'
        })
        .when('/institution/delete/:id', {
            templateUrl: 'partials/inst-delete.html',
            controller: 'DeleteInstCtrl'
        })
        .when('/dmzmgmt', {
            templateUrl: 'partials/dmz-mgmt.html',
            controller: 'DMZCtrl'
        })
        .when('/dmz/delete/:id', {
            templateUrl: 'partials/dmzinfo-delete.html',
            controller: 'DeleteDMZInfoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);




