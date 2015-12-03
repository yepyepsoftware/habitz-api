'use strict';

var habitz = angular.module('habitz', ['ngRoute']);

habitz.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/templates/landing.html'
  }).when('/habitz', {
    templateUrl : 'templates/habitz.html',
    controller  : 'HabitzCtrl'
  }).when('/users', {
    templateUrl : 'templates/users.html',
    controller  : 'UsersCtrl'
  }).otherwise({
    redirectTo: '/',
    caseInsensitiveMatch: true
  });
}]);

habitz.controller('HabitzCtrl', ['$scope', 'HabitzService', function($scope, HabitzService) {

  $scope.formData = {};
  $scope.habitz = [];

  HabitzService.getHabitz().then(function(response) {
    $scope.habitz = response;
  });

  $scope.addHabitz = function() {
    HabitzService.addHabitz($scope.formData).then(function() {
      $scope.habitz.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.removeHabitz = function(habitz) {
    HabitzService.removeHabitz(habitz).then(function(response) {
      $scope.habitz.splice($scope.habitz.indexOf(habitz), 1);
    });
  }
}]);

habitz.controller('UsersCtrl', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.formData = {};
  $scope.users = [];

  UsersService.getUsers().then(function(response) {
    $scope.users = response;
  });

  $scope.addUser = function() {
    UsersService.addUser($scope.formData).then(function(response) {
      $scope.users.push($scope.formData);
      $scope.formData = {};
    });
  }

  $scope.removeUser = function(user) {
    UsersService.removeUser(user).then(function(response) {
      $scope.users.splice($scope.users.indexOf(user), 1);
    });
  }
}]);
