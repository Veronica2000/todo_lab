var app = angular.module('toDoList', []);
// This is declaring a module. More on this in a moment

app.controller('toDoController', function($scope){
  $scope.items = ['clean house', 'go grocery shopping', ];
  $scope.addItem=function(){
  	$scope.toDoList.push($scope.newItem);
  }
});

  