'use strict';

/**
 * @ngdoc service
 * @name listaTelefonicaApp.contatosAPIService
 * @description
 * # contatosAPIService
 * Factory in the listaTelefonicaApp.
 */
angular.module('listaTelefonicaApp')
    .factory('contatosAPIService', function($http, configValue) {
        // Service logic
        // ...
        var _getContatos = function() {
            return $http.get(configValue.baseUrl + "/contato");
        };

        var _saveContato = function(contato) {
            return $http.post(configValue.baseUrl + "/contato", contato);
        };

        var _deleteContato = function(id) {
            return $http.delete(configValue.baseUrl + '/contato/' + id);
        }

        // Public API here
        return {
            getContatos: _getContatos,
            saveContato: _saveContato,
            deleteContato: _deleteContato
        };
    });