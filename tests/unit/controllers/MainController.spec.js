/**
 * Created by donmclean on 6/9/16.
 */

/*jshint -W117 */
describe('Controller: MainController', () => {

    // load the controller's module
    beforeEach(module('iko'));

    let MainController,
        $scope, $state;

    // Initialize the controller and a mock scope
    beforeEach(inject( ($controller, $rootScope, _$state_) => {
        $scope = $rootScope.$new();
        $state = _$state_;
        MainController = $controller('MainController', {
            $scope: $scope
        });
    }));

    //Sample Test 1
    it('title should be IKO', () => {
        expect($scope.models.title).toEqual('IKO');
        expect($scope.models.title.length).toBe(3);
    });

    //Sample Test 2
    it('should be a total of 4 tabs', () => {
        expect($scope.tabs.length).toBe(4);
    });

    //Sample Test 3
    it('state should exist', () => {
        expect($state).toBeTruthy();
    });

});