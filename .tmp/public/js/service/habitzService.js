habitz.service('HabitzService', function($http, $q) {
  return {
    'getHabitz': function() {
      var defer = $q.defer();
      $http.get('/habitz/getHabitz').success(function(response) {
        defer.resolve(response);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    },
    'addHabitz': function(habitz) {
      var defer = $q.defer();
      $http.post('/habitz/addHabitz', habitz).success(function(response) {
        defer.resolve(response);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    },
    'removeHabitz': function() {
      var defer = $q.defer();
      $http.post('/habitz/removeHabitz', habitz).success(function(response) {
        defer.resolve(response);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    }
  };
});
