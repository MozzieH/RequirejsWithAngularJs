define(function () {
  /**
  * Module
  *
  * Description
  */
  angular.
  module('coreModule').
  registerController('homeController', ['$scope', function($scope){
    $scope.title='home';
  }]);
});