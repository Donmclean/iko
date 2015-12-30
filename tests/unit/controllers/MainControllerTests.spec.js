/**
 * Created by donmclean on 12/29/15.
 */
describe('Controller', function() {
    "use strict";
    beforeEach(module('iko'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.models.title', function() {
        it('name of module', function() {
            var $scope = {};
            $controller('MainController', { $scope: $scope });
            console.log($scope.models.title);
            expect($scope.models.title).toEqual('IKO');
        });
    });
    describe('$scope.tabs', function() {
        it('tabs length', function() {
            var $scope = {};
            $controller('MainController', { $scope: $scope });
            expect($scope.tabs.length).toEqual(3);
        });
    });
    describe('$scope.sayHello', function() {
        it('should return HELLO WORLD!', function() {
            var $scope = {};
            $controller('MainController', { $scope: $scope });
            expect($scope.sayHello()).toBe('HELLO WORLD!');
        });
    });
});