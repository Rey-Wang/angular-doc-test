(function(App) {
    function helloWorldController ($scope) {
        $scope.text = 'hello world !(In $scope)';
    }

    /**
      * link two string with ','
      * @memberof HelloWorldController
      * @function getText
      *
      * @param {string} a first string
      * @param {string} b second string
      * @return {string} text text to show in title
    */
    helloWorldController.prototype.getText = function(a, b) {
        return `${a}, ${b}`;
    }


    /**
     * @ngdoc controller
     * @name HelloWorldController
     * @memberof App
     *
     * @description
     * a demo to show how to add a comment to a controller
    */
   App.controller('HelloWorldController', helloWorldController)
})(App)