/**
 * Created by donmclean on 12/15/15.
 */
angular.module('iko')
    .controller('MainController', ['$scope','$http', '$timeout','$templateCache','logService', ($scope,$http,$timeout,$templateCache,logService) => {
        "use strict";

        $scope.models = {
            title: "IKO",
            subtitle: "\"Don Mclean\""
        };

        $scope.tabs = [
            {
                name: "HOME", href: "/"
            },
            {
                name: "TAB 2", href: "t2"
            },
            {
                name: "TAB 3", href: "t3"
            },
            {
                name: "TAB 4", href: "t4"
            }
        ];

        let a = "z";

        $scope.sayHello = () => {
            return 'HELLO WORLD!';
        };

        if(a === 'z') {
            console.log("a = z");
        } else {
            console.log("a != z");
        }

        //console.log($templateCache.get('views/t2.html'));
        //var clock = $('.clock').FlipClock({
        // your options here
        //});

        //var $ = "test";

        //_.each($scope.models, function(m){
        //    console.log(m);
        //});

        logService.greets(a);

        $.ajax("").success(() => {
            console.log("success!!!!!!!!!!!!!!");
        }).error(() => {
            console.log("error");
        });

    }]);