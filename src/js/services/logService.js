/**
 * Created by donmclean on 12/15/15.
 */
angular.module('iko')
    .service('logService', function () {
        "use strict";
        this.greets = (str) => {
            console.log(str);
        };
    });
