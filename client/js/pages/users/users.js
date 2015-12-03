angular.module('users', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users/', {
      template: '<users></users>'
    });
  }]);
