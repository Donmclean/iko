/**
 * Created by donmclean on 12/29/15.
 */
describe('Controller', function() {
    "use strict";
    beforeEach(module('iko'));

    var $controller;

    beforeEach(inject((_$controller_) => {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.models.title', () => {
        it('name of module', () => {
            var $scope = {};
            $controller('MainController', { $scope: $scope });
            expect($scope.models.title).toEqual('IKO');
        });
    });
    describe('$scope.tabs', () => {
        it('tabs length', () => {
            var $scope = {};
            $controller('MainController', { $scope: $scope });
            expect($scope.tabs.length).toEqual(4);
        });
    });
    describe('$scope.sayHello', () => {
        it('should return HELLO WORLD!', () => {
            var $scope = {};
            $controller('MainController', { $scope: $scope });
            expect($scope.sayHello()).toBe('HELLO WORLD!');
        });
    });
});