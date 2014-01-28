'use strict';


// Declare app level module which depends on filters, and services
angular.module('contactListApp', [
  'ngRoute',
  'contactListApp.filters',
  'contactListApp.services',
  'contactListApp.directives',
  'contactListApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {templateUrl: 'partials/contact-list.html', controller: 'ContactListCtrl'});
  $routeProvider.when('/contacts/:contactId', {templateUrl: 'partials/contact-detail.html', controller: 'ContactDetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
