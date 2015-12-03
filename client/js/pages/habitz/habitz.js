angular.module('habitz', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/habitz/', {
      template: '<habitz></habitz>'
    });
  }]);
