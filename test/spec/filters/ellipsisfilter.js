'use strict';

describe('Filter: ellipsisFilter', function () {

  // load the filter's module
  beforeEach(module('listaTelefonicaApp'));

  // initialize a new instance of the filter before each test
  var ellipsisFilter;
  beforeEach(inject(function ($filter) {
    ellipsisFilter = $filter('ellipsisFilter');
  }));

  it('should return the input prefixed with "ellipsisFilter filter:"', function () {
    var text = 'angularjs';
    expect(ellipsisFilter(text)).toBe('ellipsisFilter filter: ' + text);
  });

});
