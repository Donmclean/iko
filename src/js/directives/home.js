/**
 * Created by donmclean on 12/17/15.
 */
"use strict";
angular.module('iko')
    .directive('home', () => {
        return {
            bindToController: true,
            restrict: 'EA',
            templateUrl: 'views/home.html'
        };
    });