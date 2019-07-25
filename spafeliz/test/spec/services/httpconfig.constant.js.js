'use strict';

describe('Service: httpConfig.constant.js', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var httpConfig.constant.js;
  beforeEach(inject(function (_httpConfig.constant.js_) {
    httpConfig.constant.js = _httpConfig.constant.js_;
  }));

  it('should do something', function () {
    expect(!!httpConfig.constant.js).toBe(true);
  });

});
