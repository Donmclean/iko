/**
 * Created by donmclean on 12/15/15.
 */
angular.module('iko')
    .controller('MainController', ['$scope','$http', '$timeout','$templateCache','$window','logService', ($scope,$http,$timeout,$templateCache,$window,logService) => {
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
            return 'HELLO WORLD!!';
        };

        _.forEach([1,2,3,4], function(m){
            console.log(m);
        });


        logService.greets(a);

        angular.element.ajax("").success(() => {
            console.log("success!!!!!!!!!!!!!!");
        }).error(() => {
            console.log("error");
        });

    }]);