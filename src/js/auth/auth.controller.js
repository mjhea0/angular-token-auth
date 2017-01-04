(function() {

  'use strict';

  angular
    .module('tokenAuthApp.components.auth', [])
    .controller('loginController', loginController);

  loginController.$inject = [];

  function loginController() {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'just a test';
  }

})();
