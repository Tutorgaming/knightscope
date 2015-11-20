'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleCtrl', function ($scope) {
    $scope.schedules = [
    {
      name: 'Luvish',
      machine: 'k5'
    },
    {
      name: 'Katyal',
      machine: 'k3'
    },
    {
      name: 'Test',
      machine: 'k7'
    }
  ];
});