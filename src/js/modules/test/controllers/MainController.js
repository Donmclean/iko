/**
 * Created by donmclean on 12/15/15.
 */
angular.module('test')
    .controller('MainController', ['$scope','$http', '$timeout','logService', ($scope,$http,$timeout,logService) => {
        "use strict";

        $scope.models = {
            title: "IKO",
            subtitle: "\"Don Mclean\""
        };

        $scope.tabs = [
            "tab 1",
            "tab 2",
            "tab 3",
            "tab 4",
            "tab 5"
        ];

        let a = "lllll";

        //var clock = $('.clock').FlipClock({
        //    // ... your options here
        //});

        //var $ = "test";

        _.each($scope.models, function(m){
            console.log(m);
        });

        logService.greets(a);

        $.ajax("").success(function(){
            console.log("success!!!!!!!!!!!!!!");
        }).error(function(){
            console.log("error");
        });

    }]);