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
    
    $scope.entries =  Schedule.getList().$object;
    $scope.success=false;
    
Schedule.one($routeParams.id).get().then(function(schedule) {
    $scope.schedule = schedule;
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
                    console.log('Rejected');
                    $scope.success=false;
                }
            }
        }
        
        if($scope.success===true){
            $scope.schedule.save().then(function() {
                $location.path('/schedule/' + $routeParams.id);
            });
        }      
    }
    else{
        $scope.errorMessage = 'End Date is before the Start Date!';
    }
  };
    
});
});


/* 


 $scope.editSchedule = true;
  $scope.schedule = {};
  Schedule.one($routeParams.id).get().then(function(schedule) {
    $scope.schedule = schedule;
    $scope.saveSchedule = function() {
        if($scope.schedule.startDate < $scope.schedule.endDate){
        
            $scope.schedule.save().then(function() {
                $location.path('/schedule/' + $routeParams.id);
            });
        }
        else{
            $scope.errorMessage = "End Date is before the Start Date!";
        }
    };
  });
  
  */