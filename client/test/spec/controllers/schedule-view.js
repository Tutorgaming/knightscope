'use strict';

describe('Controller: ScheduleViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ScheduleViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleViewCtrl = $controller('ScheduleViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScheduleViewCtrl.awesomeThings.length).toBe(3);
  });
});
