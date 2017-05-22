'use strict';

describe('Service: configValue', function () {

  // load the service's module
  beforeEach(module('listaTelefonicaApp'));

  // instantiate service
  var configValue;
  beforeEach(inject(function (_configValue_) {
    configValue = _configValue_;
  }));

  it('should do something', function () {
    expect(!!configValue).toBe(true);
  });

});
