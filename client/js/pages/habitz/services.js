angular.module('habitz').service('HabitzService', function($http, $q) {
  return {
    get: function() {
      return $http.get('/api/habitz/');
    },
    add: function(habitz) {
      return $http.post('/api/habitz/', habitz);
    },
    delete: function(habitId) {
      return $http.delete('/api/habitz/' + habitId);
    },
    getOne: function(habitId) {
      return $http.get('/api/habitz/' + habitId);
    },
    update: function(habit) {
      return $http.put('/api/habitz/', habit);
    }
  };
});
