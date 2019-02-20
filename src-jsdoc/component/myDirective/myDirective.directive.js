(function(App) {
    function myDirectiveController ($scope) {
        const vm = this;
        /**
         * description
         */
        $scope.text = 'this is a directive text';
        /**
         * @memberof  myDirective
         * @function getTitle
         *
         * @description get title
         * @param {string} name description
         * @param {string} value description
         *
         * @return {string} description
         */
        $scope.getTitle = function(name, value) {
            return `${name} is ${value}`;
        }
        vm.setText = function() {
            $scope.text = 'text has changed by controller';
        }
    }

    /**
     * @memberof App
     * @ngdoc directive
     * @name myDirective
     * @restrict E
     * @description
     * a demo to show how to add a ngdoc style comment to a directive
     *
     * @example
     * <my-directive name="name"></my-directive>
    **/
    App.directive('myDirective', function() {
        return {
            restrict: 'E',
            template: '<p>{{ text }}</p>',
            replace: true,
            controller: myDirectiveController,
            controllerAs: 'myDirectiveCtrl',
            bindToController: true,
        }
    })
})(App)