'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleEditCtrl
 * @description
 * # ScheduleEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleEditCtrl', function (
  $scope,
  $routeParams,
  Schedule,
  $location
) {
  $scope.editSchedule = true;
  $scope.schedule = {};
  Schedule.one($routeParams.id).get().then(function(schedule) {
    $scope.schedule = schedule;
    $scope.saveSchedule = function() {
      $scope.schedule.save().then(function() {
        $location.path('/schedule/' + $routeParams.id);
      });
    };
  });
});
