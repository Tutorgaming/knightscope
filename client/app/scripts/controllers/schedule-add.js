/* Add controller: This controller includes various fields CHECKS to create machine schedule for example - Name, machine name, location, purpose, start date & end date. 

Validation is done for each field in form.

While submitting make sure - Same machine cannot be scheduled for a different time period. Make sure they don’t overlap. */



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
    
    $scope.entries =  Schedule.getList().$object;
    $scope.success=false;
    
    
  $scope.saveSchedule = function() {
      
      var currDate = new Date();
      
      if(new Date($scope.schedule.startDate) <= currDate) {
          $scope.errorMessage = 'Start Date is expired';
          return false;
      }
    
    if($scope.schedule.startDate <= $scope.schedule.endDate){
        
        for(var i = 0; i < $scope.entries.length; i++){
            if($scope.schedule.machine === $scope.entries[i].machine){
           //     console.log($scope.entries[i].machine);
                if($scope.schedule.startDate > $scope.entries[i].endDate || $scope.schedule.endDate < $scope.entries[i].startDate ){
                   $scope.success=true;
                }
                else{
                    $scope.errorMessage = 'Entry for this machine exists within this time period!';
                    $scope.success=false;
                }
            }
        }
        
        if($scope.success===true){
        Schedule.post($scope.schedule).then(function() {
            console.log('sucess');
            $location.path('/schedule');
        });
        }      
    }
    else{
        $scope.errorMessage = 'End Date is before the Start Date!';
    }
  };

    
    
});