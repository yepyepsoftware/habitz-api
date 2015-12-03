'use strict';

var UsersDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/js/pages/users/users.html',
    replace: false,
    controller: 'UsersCtrl as ctrl',
    scope: {
      expense: '='
    }
  }
}

angular.module('users').directive('users', UsersDirective);
