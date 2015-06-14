//测试主入口控制器
define(function() {
  var coreModule = angular.module('coreModule');
  coreModule.controller('mainController', ['$scope', function($scope) {
    $scope.title = 'someone';
  }]);
});