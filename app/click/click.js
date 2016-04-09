'use strict';

angular.module('myApp.click', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/click', {
    templateUrl: 'click/click.html',
    controller: 'ClickCtrl'
  });
}])

.controller('ClickCtrl', ['$scope', function($scope) {
  $scope.clickArray = [];
  $scope.clickEvent = function (event) {
    var clickObj = {
      xCordinate: event.clientX,
      yCordinate: event.clientY,
      timestamp: new Date()
    }
    $scope.clickArray.push(clickObj);
    $scope.showClick(clickObj);
  }
  $scope.showClick = function (clickObj) {
    var clickHtml = '<span class="circle-span animated fadeIn" \
                     style="top: ' + (clickObj.yCordinate - 15) + 'px; \
                     left: ' + (clickObj.xCordinate - 15) + 'px"></span>';
    $('.click-playground').append(clickHtml)
  }
}]);
