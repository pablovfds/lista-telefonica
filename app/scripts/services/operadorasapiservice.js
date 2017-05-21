'use strict';

/**
 * @ngdoc service
 * @name listaTelefonicaApp.operadorasAPIService
 * @description
 * # operadorasAPIService
 * Service in the listaTelefonicaApp.
 */
angular.module('listaTelefonicaApp')
    .service('operadorasAPIService', function($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.getOperadoras = function() {
            return $http.get("http://localhost:1337/operadora");
        };
    });