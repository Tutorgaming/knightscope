'use strict';

describe('Controller: ScheduleEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ScheduleEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleEditCtrl = $controller('ScheduleEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScheduleEditCtrl.awesomeThings.length).toBe(3);
  });
});
