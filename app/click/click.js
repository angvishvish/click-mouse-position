'use strict';

angular.module('myApp.click', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/click', {
    templateUrl: 'click/click.html',
    controller: 'ClickCtrl'
  });
}])

.controller('ClickCtrl', [function() {

}]);