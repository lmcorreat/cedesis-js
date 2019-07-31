'use strict';

describe('Controller: BookotherCtrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var BookotherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookotherCtrl = $controller('BookotherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookotherCtrl.awesomeThings.length).toBe(3);
  });
});
