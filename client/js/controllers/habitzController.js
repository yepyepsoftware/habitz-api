'use strict';

habitz.controller('HabitzCtrl', ['$scope', 'HabitzService', function($scope, HabitzService) {

  $scope.formData = {};
  $scope.formEdit = {};
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

  $scope.selectHabit = function(habitId) {
    HabitzService.getHabit(habitId, $scope.formEdit).then(function(res) {
      console.log(res.data);
      $scope.formEdit = res.data;
    });
  }

  $scope.updateHabit = function(habitId) {
    HabitzService.updateHabit(habitId).then(function(res) {
      // $scope.selectedHabit = res.data;
      // $scope.formEdit = {};

      // This is not correct way to do this!?
      HabitzService.getHabitz().then(function(res) {
        $scope.habitz = res;
      });
    });
  }
}]);
