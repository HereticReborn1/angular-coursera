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
            var count = 0;
            for(var i=0; i<list.length; i++) {
                if(list[i] !== "") 
                    count++;
            }
            // console.log(list.length);
            if(count > 3) {
                $scope.message = "Too much!";
            }
            else {
                $scope.message = "Enjoy!";
            }
            $scope.messageColor = "green";
            
        } else {
            $scope.messageColor = "red";
            $scope.message = "Please enter data first";
        }       
        
    }
}
})();