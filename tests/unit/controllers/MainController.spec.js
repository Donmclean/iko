/**
 * Created by donmclean on 6/9/16.
 */
describe('Controller: MainController', () => {

    // load the controller's module
    beforeEach(module('iko'));

    var MainController,
        $scope, $state;

    // Initialize the controller and a mock scope
    beforeEach(inject( ($controller, $rootScope, _$state_) => {
        $scope = $rootScope.$new();
        $state = _$state_;
        MainController = $controller('MainController', {
            $scope: $scope
        });
    }));

    it('title should be IKO', () => {
        expect($scope.models.title).toEqual('IKO');
        expect($scope.models.title.length).toBe(3);
    });

});