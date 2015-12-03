'use strict';

var app = angular.module('app', [
  'ngRoute',
  'users',
  'habitz'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/landing.html'
    // }).when('/habitz', {
    //   templateUrl : 'templates/habitz.html',
    //   controller  : 'HabitzCtrl'
    // }).when('/users', {
    //   template: '<user-list></user-list>'
      // templateUrl : 'templates/users.html',
      // controller  : 'UsersCtrl as ctrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    });
  }]);
