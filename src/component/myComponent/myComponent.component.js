(function(App) {
    function MyComponentController () {
        var vm = this;
        vm.text = 'My Controller (In Controller)';
    }

    MyComponentController.prototype.getText = function() {
        return 'My Controller (In Prototype)';
    }


    /**
     * @ngdoc component
     * @name App.component:myComponent
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