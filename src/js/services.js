(function() {

  'use strict';

  angular
    .module('tokenAuthApp.services', [])
    .service('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:3000/auth/';
    this.login = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + 'login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
    this.register = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + 'register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
    this.ensureAuthenticated = function(token) {
      return $http({
        method: 'GET',
        url: baseURL + 'user',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      });
    };
  }

})();
