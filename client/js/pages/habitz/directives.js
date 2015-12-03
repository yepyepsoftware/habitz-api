'use strict';

var HabitzDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/js/pages/habitz/habitz.html',
    replace: false,
    controller: 'HabitzCtrl as ctrl',
    scope: {
      expense: '='
    }
  }
}

angular.module('habitz').directive('habitz', HabitzDirective)
