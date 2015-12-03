'use strict';

var HabitzCtrl = function(HabitzService) {
  var self = this;

  self.newData = {};
  self.editData = {};
  self.habitz = [];

  HabitzService.get().then(function(response) {
    self.habitz = response.data;
  });

  self.add = function() {
    HabitzService.add(self.newData).then(function(res) {
      self.habitz.push(res.data);
      self.newData = {};
    });
  }

  self.delete = function(habit) {
    HabitzService.delete(habit._id).then(function(res) {
      self.habitz.splice(self.habitz.indexOf(habit), 1);
    });
  }

  self.update = function() {
    HabitzService.update(self.editData).then(function(res) {
      self.editData = {};
    });
  }

  self.select = function(habit) {
    self.editData = habit;
  }
}

HabitzCtrl.$inject = ['HabitzService'];

angular.module('habitz').controller('HabitzCtrl', HabitzCtrl)


  // $scope.selectHabit = function(habitId) {
  //   HabitzService.getHabit(habitId, $scope.formEdit).then(function(res) {
  //     console.log(res.data);
  //     $scope.formEdit = res.data;
  //   });
  // }
