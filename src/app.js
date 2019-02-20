
/**
  * @ngdoc overview
  * @name angular.module:App
  *
  * @description
  * the project module
  *
*/
var App = angular.module('app', [])
App.controller('FormController', function($scope) {
  $scope.fst = "FormController"
})