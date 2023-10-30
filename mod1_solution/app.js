(function () {
'use strict';

angular.module('Lunch-checker',[])
.controller('lcController', lcController);

lcController.$inject =['$scope'];

function lcController($scope) {
    $scope.lunchList = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
        if($scope.lunchList.length > 0) {
            var list = $scope.lunchList.split(',');
            // console.log(list.length);
            if(list.length > 3) 
                $scope.message = "Too much!";
            else
                $scope.message = "Enjoy!";
        } else {
            $scope.message = "Please enter data first";
        }       
        
    }
}
})();