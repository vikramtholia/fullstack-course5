( function(){
    'use strict';
    angular.module('LunchCheck',[])
    
    .controller('myFirstController',DIFunction);
    
    function DIFunction($scope){
        $scope.itemList="";
        $scope.message;
        $scope.myFun = function(){
            $scope.message = "";
            var items = $scope.itemList;
            var array = items.split(",");
            if(!items){
                $scope.message = "Please enter data first";
            }
            else if(array.length < 4){
                $scope.message = "Enjoy!";
            }
            else if(array.length > 3){
                $scope.message = "Too much!";
            }
        };
    }
    
}
)();