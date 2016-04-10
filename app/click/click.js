'use strict';

angular.module('myApp.click', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/click', {
    templateUrl: 'click/click.html',
    controller: 'ClickCtrl'
  });
}])

.controller('ClickCtrl', [
  '$scope', '$localStorage',
  function($scope, $localStorage) {
    $scope.clickArray = [];
    $scope.clickEvent = function (event) {
      var clickObj = {
        xCordinate: event.clientX,
        yCordinate: event.clientY,
        timestamp: new Date()
      }
      $scope.clickArray.push(clickObj);
      $localStorage.click = $scope.clickArray;
      console.log($localStorage);
      $scope.showClick(clickObj);
    }
    $scope.showClick = function (clickObj) {
      var clickHtml = '<span class="circle-span animated fadeIn" \
                       style="top: ' + (clickObj.yCordinate - 15) + 'px; \
                       left: ' + (clickObj.xCordinate - 15) + 'px"></span>';
      $('.click-playground').append(clickHtml);
    }

    $scope.clearStorage = function () {
      $('.click-playground').html('');
      $scope.clickArray = []
      $localStorage.$reset({
        click: $scope.clickArray
      });
    }
  }
]);
