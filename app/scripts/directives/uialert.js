'use strict';

/**
 * @ngdoc directive
 * @name listaTelefonicaApp.directive:uiAlert
 * @description
 * # uiAlert
 */
angular.module('listaTelefonicaApp')
    .directive('uiAlert', function() {
        return {
            templateUrl: 'views/alert.html',
            restrict: 'AE',
            scope: {
                topic: "@title",
                error: "=message"
            }

        };
    });