'use strict';

/* Controllers */

angular.module('contactListApp.controllers', []).
  controller('ContactListCtrl', function($scope) {
  
  	$scope.contacts [
		{
			"first": "Jim",
			"last": "Cooper",
			"extention": "3219"
		},
		{
			"first": "Liane",
			"last": "Cooper",
			"extention": "3418"
		},
		{
			"firste": "Rick",
			"last": "Brown",
			"extention": "3376"
		},
		{
			"first": "Len",
			"last": "Payne",
			"extention": "3418"
		}
	]

  })
  .controller('MyCtrl2', [function() {

  }]);