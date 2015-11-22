/*

Gets data from the backend and delete it on the frontend

*/

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleCtrl', function ($scope, Schedule) {
    $scope.schedules = Schedule.getList().$object;
});