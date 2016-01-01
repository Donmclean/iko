/**
 * Created by donmclean on 12/29/15.
 */
describe('Controller', () => {
    "use strict";
    beforeEach(module('iko'));

    var $controller;

    beforeEach(inject((_$controller_) => {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.models.test', () => {
        it('name of module', () => {
            var $scope = {};
            $controller('ErrorController', { $scope: $scope });
            expect($scope.models.test).toEqual('HELLO WORLD!');
        });
    });
});