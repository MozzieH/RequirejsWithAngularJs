define(['modules/core/runners/logRunner'], function(logRunner) {
  /**
   *  Module
   * Description
   */

  var coreModule = angular.module('coreModule', ['ngRoute', 'themeModule']).
  config(['$controllerProvider', function($controllerProvider) {
    coreModule.registerController = $controllerProvider.register;
  }]).

  config(function($interpolateProvider, $routeProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]'); //change{{}}
    $routeProvider.when('/', {
      templateURL: '/app/modules/core/view/home.html',
      controller: 'homeController'
    });
    $routeProvider.when('/home', {
      templateURL: '/app/modules/core/view/home.html',
      controller: 'homeController',
      resolve: {
        load: ['$q', function($q) {
          var defered = $q.defer();
          require(['modules/core/controller/homeController'], function() {
            defered.resolve();

          });
          return defered.promise;
        }]
      }
    });
    //$routeProvider.otherwise({redirectTo: '/index'});

  });

  coreModule.run(logRunner); //log

  require(['modules/core/controllerReferences'], function(
    references) {
    require(references, function() {
      angular.bootstrap(document, ['coreModule']);
    });
  });
});