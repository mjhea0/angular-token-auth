(function() {

  'use strict';

  angular
    .module('tokenAuthApp.components.auth', [])
    .controller('authLoginController', authLoginController)
    .controller('authRegisterController', authRegisterController)
    .controller('authStatusController', authStatusController);

  authLoginController.$inject = ['$location', 'authService'];
  authRegisterController.$inject = ['$location', 'authService'];
  authStatusController.$inject = ['authService'];

  function authLoginController($location, authService) {
    /*jshint validthis: true */
    const vm = this;
    vm.user = {};
    vm.onLogin = function() {
      authService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
        $location.path('/status');
      })
      .catch((err) => {
        console.log(err);
      });
    };
  }

  function authRegisterController($location, authService) {
    /*jshint validthis: true */
    const vm = this;
    vm.user = {};
    vm.onRegister = function() {
      authService.register(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
        $location.path('/status');
      })
      .catch((err) => {
        console.log(err);
      });
    };
  }

  function authStatusController(authService) {
    /*jshint validthis: true */
    const vm = this;
    vm.isLoggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      authService.ensureAuthenticated(token)
      .then((user) => {
        if (user.data.status === 'success');
        vm.isLoggedIn = true;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

})();
