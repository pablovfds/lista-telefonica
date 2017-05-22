'use strict';

/**
 * @ngdoc filter
 * @name listaTelefonicaApp.filter:ellipsisFilter
 * @function
 * @description
 * # ellipsisFilter
 * Filter in the listaTelefonicaApp.
 */
angular.module('listaTelefonicaApp')
    .filter('ellipsisFilter', function() {
        return function(input, size) {
            if (input.length <= size) return input;
            var output = input.substring(0, (size || 3)) + "...";
            return output;
        };
    });