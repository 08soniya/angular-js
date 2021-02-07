(function() {
	'use strict';
	angular.module('myFirstApp',[])
	.controller('MyFirstController', function($scope){
		$scope.name="Soniya";
		$scope.sayHello = function(){
			return "Hello Angular";
		}
	});
})();