(function(App) {
    function MyComponentController () {
        var vm = this;
        vm.text = 'My Controller (In Controller)';
    }

    /**
     * @memberof myComponent
     * @function getText
     * @returns {string} tips a text to show how the component use
     * @example
     *  $ctrl.getText()
     */
    MyComponentController.prototype.getText = function() {
        return 'My Controller (In Prototype)';
    }


    /**
     * @memberof App
     * @ngdoc component
     * @name myComponent
     *
     * @param {String} name page title
     *
     * @description
     * a demo to show how to add a ngdoc style comment to a component
     *
    */
    App.component('myComponent', {
        templateUrl: 'src/component/myComponent/myComponent.html',
        controller: MyComponentController,
        bindings: {
            name: '@'
        }
    })
})(App)