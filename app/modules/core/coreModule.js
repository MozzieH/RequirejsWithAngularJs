define(['modules/core/runners/logRunner'], function(logRunner) {
  /**
   *  Module
   * main
   * Description
   */
  var coreModule = angular.module('coreModule', ['ngRoute', 'themeModule']).
  config(function($interpolateProvider, $routeProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]'); //change{{}}
    $routeProvider.when('/',{
      templateURL:'/app/modules/core/view/home.html',
      controller:'homeController'
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