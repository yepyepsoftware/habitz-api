habitz.service('UsersService', function($http, $q) {
  return {
    getUsers: function() {
      var defer = $q.defer();
      $http.get('/users/getUsers').success(function(response) {
        defer.resolve(response);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    },
    addUser: function(user) {
      var defer = $q.defer();
      $http.post('/users/addUser', user).success(function(response) {
        defer.resolve(response);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    },
    removeUser: function() {
      var defer = $q.defer();
      $http.post('/users/removeUser', name).success(function(response) {
        defer.resolve(response);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    }
  };
});
