(function(App) {
    function helloWorldController ($scope) {
        $scope.text = 'hello world !(In $scope)';
    }

    /**
      * @ngdoc method
      * @name App.controller:HelloWorldController#getText
      *
      * @methodOf App.controller:HelloWorldController
      *
      * @description
      * Description
      *
      * @param {string} name description
      * @return {string} name description
    */
    helloWorldController.prototype.getText = function(a, b) {
        return `${a}, ${b}`;
    }


    /**
     * @this $ctrl
     * @ngdoc controller
     * @name App.controller:HelloWorldController
     *
     * @description
     * a demo to show how to add a comment to a controller
    */
   App.controller('HelloWorldController', helloWorldController)
})(App)