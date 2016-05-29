/**
 * Created by donmclean on 12/17/15.
 */
"use strict";
angular.module('iko')
    .directive('t4', () => {
        return {
            bindToController: true,
            restrict: 'EA',
            templateUrl: 'views/t4.html'
        };
    });