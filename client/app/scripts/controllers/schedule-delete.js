/*

Deletes the machine schedule from the backend

*/


'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleDeleteCtrl
 * @description
 * # ScheduleDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleDeleteCtrl', function (
  $scope,
  $routeParams,
  Schedule,
  $location
) {
  $scope.schedule = Schedule.one($routeParams.id).get().$object;
  $scope.deleteSchedule = function() {
    $scope.schedule.remove().then(function() {
      $location.path('/schedule');
    });
  };
  $scope.back = function() {
    $location.path('/schedule/' + $routeParams.id);
  };
});
