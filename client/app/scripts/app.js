'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
        //controllerAs: 'schedule'
      })
    .when('/timeline', {
        templateUrl: 'views/timeline.html',
        //controller: 'ScheduleCtrl'
        //controllerAs: 'schedule'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
