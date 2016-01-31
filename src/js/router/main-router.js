/**
 * Created by donmclean on 12/17/15.
 */
"use strict";
angular.module('iko')
    .config(function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");

        // Now set up the states
        $stateProvider
            .state('/', {
                url: "/",
                template: '<home></home>'
            })
            .state('t2', {
                url: "/t2",
                template: '<t2></t2>'
            })
            .state('t3', {
                url: "/t3",
                template: '<t3></t3>'
            })
            .state('t4', {
            url: "/t4",
            template: '<t4></t4>'
        });
    });