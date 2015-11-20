'use strict';

describe('Controller: ScheduleAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ScheduleAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleAddCtrl = $controller('ScheduleAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScheduleAddCtrl.awesomeThings.length).toBe(3);
  });
});
