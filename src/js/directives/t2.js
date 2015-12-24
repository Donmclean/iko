/**
 * Created by donmclean on 12/17/15.
 */
"use strict";
angular.module('iko')
    .directive('t2', () => {
        return {
            bindToController: true,
            restrict: 'EA',
            templateUrl: 'views/t2.html'
        };
    });