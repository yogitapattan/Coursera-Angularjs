(function(){
'use strict';

angular.module("LunchCheck",[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.message="";

	$scope.checkList = function() {
		if(!$scope.lunchList){
			$scope.message="Please enter data first";
		}
		else{
			var words = $scope.lunchList.split(',');
			//console.log(words);
			if(words.length<=3)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too much!";
		}
	};

}



})();