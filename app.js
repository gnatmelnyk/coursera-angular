(function() {
'use strict';

    angular.module('myFirstApp', [])
        .controller('MyFirstController', function($scope) {
            $scope.name = "Gnat";
            $scope.sayHello = function() {
                return "some text";
            }
        });
})();