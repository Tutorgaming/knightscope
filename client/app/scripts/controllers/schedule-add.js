'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleAddCtrl
 * @description
 * # ScheduleAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleAddCtrl', function ($scope, Schedule, $location) {
  $scope.schedule = {};
  $scope.saveSchedule = function() {
    Schedule.post($scope.schedule).then(function() {
      $location.path('/schedule');
    });
  };
});
