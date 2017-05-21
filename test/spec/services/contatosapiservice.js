'use strict';

describe('Service: contatosAPIService', function () {

  // load the service's module
  beforeEach(module('listaTelefonicaApp'));

  // instantiate service
  var contatosAPIService;
  beforeEach(inject(function (_contatosAPIService_) {
    contatosAPIService = _contatosAPIService_;
  }));

  it('should do something', function () {
    expect(!!contatosAPIService).toBe(true);
  });

});
