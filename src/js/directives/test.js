/**
 * Created by donmclean on 12/17/15.
 */
"use strict";
angular.module('iko')
    .directive('test', () => {
        return {
            bindToController: true,
            restrict: 'EA',
            templateUrl: 'test.html'
        };
    });