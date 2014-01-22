'use strict';

/* Controllers */

angular.module('contactListApp.controllers', []).
	controller('ContactListCtrl', function($scope,$http) {
	  $http.get('contacts/contacts.json').success(function(data){
	    $scope.contacts = data;
	  });
	  
	  $scope.orderProp = "first";
});
