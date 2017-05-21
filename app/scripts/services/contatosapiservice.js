'use strict';

/**
 * @ngdoc service
 * @name listaTelefonicaApp.contatosAPIService
 * @description
 * # contatosAPIService
 * Factory in the listaTelefonicaApp.
 */
angular.module('listaTelefonicaApp')
    .factory('contatosAPIService', function($http) {
        // Service logic
        // ...
        var _getContatos = function() {
            return $http.get("http://localhost:1337/contato");
        };

        var _saveContato = function(contato) {
            return $http.post("http://localhost:1337/contato", contato);
        };

        var _deleteContato = function(id) {
            return $http.delete('http://localhost:1337/contato/' + id);
        }

        // Public API here
        return {
            getContatos: _getContatos,
            saveContato: _saveContato,
            deleteContato: _deleteContato
        };
    });