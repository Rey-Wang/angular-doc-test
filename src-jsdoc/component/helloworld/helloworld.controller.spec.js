require('angular');
require('angular-mocks');
require('./helloworld.controller');

describe('helloworldController', function() {
    var $controller;
    var $rootScope;

    beforeEach(angular.mock.module('app'))

    beforeEach(inject(function(_$controller_, _$rootScope_){
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }))

    describe('helloworldController.getText', function() {
        it('should link two string when execute getText function', function() {
            var controller = $controller("HelloWorldController", {$scope: {}});
            var stringA = 'hello';
            var stringB = 'world';
            expect(controller.getText(stringA, stringB)).toEqual('hello, world');
        })
    })
})