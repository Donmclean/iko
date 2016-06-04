/**
 * Created by donmclean on 12/15/15.
 */
angular.module('iko')
    .controller('ErrorController', ['$scope', function($scope) {
        "use strict";
        $scope.models = {
          test : "HELLO WORLD!!"
        };

        console.log($scope.models.test);
    }]);