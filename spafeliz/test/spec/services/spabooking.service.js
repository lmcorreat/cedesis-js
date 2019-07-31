'use strict';

describe('Service: spaBooking.service', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaBooking.service;
  beforeEach(inject(function (_spaBooking.service_) {
    spaBooking.service = _spaBooking.service_;
  }));

  it('should do something', function () {
    expect(!!spaBooking.service).toBe(true);
  });

});
