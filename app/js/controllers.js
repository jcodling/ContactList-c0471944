'use strict';

/* Controllers */

var contactsControllers = angular.module('contactListApp.controllers', []);

contactsControllers.controller('ContactListCtrl', function($scope,$http) {
	  $http.get('contacts/contacts.json').success(function(data){
	    $scope.contacts = data;
	  });
	  
	  $scope.orderProp = "first";
});

contactsControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope,$routeParams,$http) {
	  $http.get('contacts/' + $routeParams.contactId +'.json').success(function(data){
	    $scope.contact = data;
	  });
	  
	  $scope.orderProp = "first";
}]);
