(function() {
'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.messageClass = '';
        $scope.borderClass = '';

        $scope.checkIfTooMuch = checkIfTooMuch;

        function checkIfTooMuch() {
            if ($scope.dishes === '') {
                $scope.message = 'Please enter data first';
                $scope.messageClass = 'error';
                $scope.borderClass = 'border-red';

                // exit
                return;
            }

            // filter all empty values (, ,)
            // and get number of left items
            var numberOfDishes = $scope.dishes.split(',').filter(dish => {
                // remove all spaces
                // and check if something left
                return dish.replaceAll(' ', '').length > 0;    
            }).length;


            $scope.message = numberOfDishes > 3 ? 'Too much!' : 'Enjoy!';
            $scope.messageClass = 'success';
            $scope.borderClass = 'border-green';

        }
    }
})();