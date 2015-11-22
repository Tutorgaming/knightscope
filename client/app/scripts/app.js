/*

This is the ngROUTE page

This controller helps navigation.

binds controller and view together.

*/

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
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('http://localhost:3000');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
        //controllerAs: 'main'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
        //controllerAs: 'schedule'
      })
    .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'ScheduleCtrl'
        //controllerAs: 'schedule'
      })
      .when('/create/schedule', {
        templateUrl: 'views/schedule-add.html',
        controller: 'ScheduleAddCtrl'
        //controllerAs: 'scheduleAdd'
      })
      .when('/schedule/:id', {
        templateUrl: 'views/schedule-view.html',
        controller: 'ScheduleViewCtrl'
        //controllerAs: 'scheduleView'
      })
      .when('/schedule/:id/delete', {
        templateUrl: 'views/schedule-delete.html',
        controller: 'ScheduleDeleteCtrl'
        //controllerAs: 'scheduleDelete'
      })
      .when('/schedule/:id/edit', {
        templateUrl: 'views/schedule-edit.html',
        controller: 'ScheduleEditCtrl'
        //controllerAs: 'scheduleEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

    .factory('ScheduleRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setRestangularFields({
        id: '_id'
        });
    });
    })
    .factory('Schedule', function(ScheduleRestangular) {
    return ScheduleRestangular.service('schedule');
    });
