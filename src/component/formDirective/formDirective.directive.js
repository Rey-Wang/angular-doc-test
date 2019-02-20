(function(App) {
  function formDirectiveController ($scope) {
    $scope.data = {
      name: "",
      email: "",
      password: ""
    }
    $scope.fst = 'fromDirective'
  }

  /**
   * @ngdoc directive
   * @name App.directive:formDirective
   * @restrict 'E'
   * @element ANY
   * @scope
   * priority: 0
   * @description
   * a demo to show how to add a ngdoc style comment to a directive
   *
   * @example
   * <form-directive name="name"></form-directive>
  **/
  App.directive('formDirective', function() {
      return {
          restrict: 'E',
          templateUrl: './src/component/formDirective/template.html',
          replace: true,
          controller: formDirectiveController,
          controllerAs: 'formDirectiveCtrl',
          bindToController: true,
      }
  })
})(App)