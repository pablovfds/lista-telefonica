'use strict';

/**
 * @ngdoc function
 * @name listaTelefonicaApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the listaTelefonicaApp
 */
angular.module('listaTelefonicaApp')
    .controller('ListaCtrl', function($scope, contatosAPIService, operadorasAPIService, toastr) {

        $scope.app = "Lista Telefonica";
        $scope.error = "";

        $scope.contatos = [];

        $scope.operadoras = [];

        var carregaContatos = function() {
            contatosAPIService.getContatos()
                .then(function success(response) {
                    $scope.contatos = response.data;
                    toastr.success('Sucesso ao carregar contatos');
                    toastr.info('Você possui ' + response.data.length + ' contatos');
                }, function error(error) {
                    var message = "Não foi possivel carregar a lista de contatos";
                    $scope.error = message;
                    toastr.error(message);
                });
        };

        var carregaOperadoras = function() {
            operadorasAPIService.getOperadoras()
                .then(function success(response) {
                    $scope.operadoras = response.data;
                }, function error(error) {
                    var message = "Não foi possivel carregar a lista de operadoras";
                    $scope.error = message;
                    toastr.error(message);
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
                    toastr.success('Contato adicionado com sucesso');

                }, function myError(error) {
                    toastr.error('Erro ao adicionar o contato');
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
                .then(function success(response) {
                    toastr.clear();

                    carregaContatos();
                    toastr.success("Contato excluido com sucesso");
                }, function error(error) {
                    console.log("error " + error);
                    toastr.error("Erro ao excluir contato");
                });
        };

        $scope.editarContato = function(contato) {
            $scope.edtContato = contato;
        };

        carregaContatos();
        carregaOperadoras();
    });