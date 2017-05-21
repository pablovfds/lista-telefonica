'use strict';

/**
 * @ngdoc function
 * @name listaTelefonicaApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the listaTelefonicaApp
 */
angular.module('listaTelefonicaApp')
    .controller('ListaCtrl', function($scope, $http, contatosAPIService, operadorasAPIService) {

        $scope.app = "Lista Telefonica";

        $scope.contatos = [];

        $scope.operadoras = [];

        var carregaContatos = function() {
            contatosAPIService.getContatos()
                .then(function mySucces(response) {
                    $scope.contatos = response.data;
                }, function myError(error) {
                    console.log("error" + error);
                });
        };

        var carregaOperadoras = function() {
            operadorasAPIService.getOperadoras()
                .then(function mySucces(response) {
                    $scope.operadoras = response.data;
                }, function myError(error) {
                    console.log("error" + error);
                });
        };

        $scope.adicionarContato = function(contato) {

            var body = {
                nome: contato.nome,
                telefone: contato.telefone,
                operadora: {
                    nome: contato.operadora.nome,
                    codigo: contato.operadora.codigo,
                    categoria: contato.operadora.categoria
                }
            };

            contatosAPIService.saveContato(body)
                .then(function mySucces(response) {
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregaContatos();
                    angular.element('#novoContatoModal').modal('hide');
                }, function myError(error) {
                    console.log("error " + error);
                });
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
            contatosAPIService.deleteContato(contato.id)
                .then(function mySucces(response) {
                    carregaContatos();
                }, function myError(error) {
                    console.log("error " + error);
                });
        };

        $scope.editarContato = function(contato) {
            console.log(contato);
        };

        carregaContatos();
        carregaOperadoras();
    });