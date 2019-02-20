(function(App){

    /**
     * @ngdoc service
     * @name myService
     * @memberof App
     *
     * @description
     *     a demo to show how to add a ngdoc style comment to a service

    **/
    App.service('myService', ['$q', function($q) {
        this.noop = angular.noop;
    }])
})(App)