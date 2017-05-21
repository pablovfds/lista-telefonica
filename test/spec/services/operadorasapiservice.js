'use strict';

describe('Service: operadorasAPIService', function () {

  // load the service's module
  beforeEach(module('listaTelefonicaApp'));

  // instantiate service
  var operadorasAPIService;
  beforeEach(inject(function (_operadorasAPIService_) {
    operadorasAPIService = _operadorasAPIService_;
  }));

  it('should do something', function () {
    expect(!!operadorasAPIService).toBe(true);
  });

});
