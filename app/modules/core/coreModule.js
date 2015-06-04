define(['modules/core/runners/logRunner'], function(logRunner) {
  /**
   *  Module
   * 入口
   * Description
   */
  var coreModule = angular.module('coreModule', ['themeModule']).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]'); //更改插值表达式{{}}
  });

  coreModule.run(logRunner); //统一提示方法

  require(['modules/core/controllerReferences'], function(
    references) {
    require(references, function() {
      angular.bootstrap(document, ['coreModule']);
    });
  });
});