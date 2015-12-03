'use strict';

var UsersCtrl = function(UsersService) {
  var self = this;

  self.formData = {};
  self.users = [];

  UsersService.get().then(function(response) {
    self.users = response.data;
  });

  self.add = function() {
    UsersService.add(self.formData).then(function(response) {
      self.users.push(self.formData);
      self.formData = {};
    });
  }

  self.delete = function(user) {
    UsersService.delete(user).then(function(response) {
      self.users.splice(self.users.indexOf(user), 1);
    });
  }
}

UsersCtrl.$inject = ['UsersService'];

angular.module('users').controller('UsersCtrl', UsersCtrl);
