'use strict';

describe('Directive: uiDate', function () {

  // load the directive's module
  beforeEach(module('listaTelefonicaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-date></ui-date>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiDate directive');
  }));
});
