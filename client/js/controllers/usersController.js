'use strict';

angular.module('habitz')

  .controller('UsersCtrl', ['$scope', 'UsersService', function($scope, UsersService) {

    $scope.formData = {};
    $scope.users = [];

    UsersService.getUsers().then(function(response) {
      $scope.users = response.data;
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
