'use strict';

describe('Service: serviceDetail.factory', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var serviceDetail.factory;
  beforeEach(inject(function (_serviceDetail.factory_) {
    serviceDetail.factory = _serviceDetail.factory_;
  }));

  it('should do something', function () {
    expect(!!serviceDetail.factory).toBe(true);
  });

});
