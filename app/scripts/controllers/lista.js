'use strict';

/**
 * @ngdoc function
 * @name listaTelefonicaApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the listaTelefonicaApp
 */
angular.module('listaTelefonicaApp')
    .controller('ListaCtrl', function($scope, $http) {

        $scope.app = "Lista Telefonica";

        $scope.contatos = [];

        $scope.operadoras = [];

        var reqContatos = {
            method: 'GET',
            url: 'http://localhost:1337/contato',
            headers: {
                'Content-Type': "application/json"
            }
        };

        var carregaContatos = function() {
            $http(reqContatos)
                .then(function mySucces(response) {
                    $scope.contatos = response.data;
                }, function myError(error) {
                    console.log("error" + error);
                });
        };

        var reqOperadoras = {
            method: 'GET',
            url: 'http://localhost:1337/operadora',
            headers: {
                'Content-Type': "application/json"
            }
        };

        var carregaOperadoras = function() {
            $http(reqOperadoras)
                .then(function mySucces(response) {
                    $scope.operadoras = response.data;
                }, function myError(error) {
                    console.log("error" + error);
                });
        };

        $scope.adicionarContato = function(contato) {
            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            angular.element('#novoContatoModal').modal('hide');
        };

        $scope.removerContatos = function(contatos) {
            $scope.contatos = contatos.filter(function(contato) {
                if (!contato.selecionado) return contato;
            });
        };

        $scope.isContatoSelecionado = function(contatos) {
            return contatos.some(function(contato) {
                return contato.selecionado;
            });
        };

        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        $scope.deletarContato = function(contato) {
            contato.selecionado = true;
            $scope.contatos = $scope.contatos.filter(function(contato) {
                if (!contato.selecionado) return contato;
            });
        };

        $scope.editarContato = function(contato) {
            console.log(contato);
        };

        carregaContatos();
        carregaOperadoras();
    });