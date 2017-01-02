(function() {

  'use strict';

  angular
    .module('tokenAuthApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
