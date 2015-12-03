angular.module('users').service('UsersService', function($http, $q) {
  return {
    add: function(user) {
      return $http.post('/api/users/', user);
    },
    get: function() {
      return $http.get('/api/users/');
    },
    edit: function() {
      return 1;
    },
    delete: function(userId) {
      return $http.delete('/api/users/' + userId);
    }
  };
});
